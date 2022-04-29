import bcrypt from "bcryptjs";
import crypto from "crypto";
import { SignJWT, jwtVerify } from "jose";

import User from "./user.model";
import Token from "../../models/token.model";
import { CustomError } from "../../utils/customError";
import MailService from "../../services/mail.service";
import { config } from "../../config";
import registrationService from "../registration/registration.service";

const { JWT_SECRET, BCRYPT_SALT, url } = config;

class AuthService {
  async _getLoginToken(user) {
    const token = await new SignJWT({
      id: user._id,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      isCompleted: user.isCompleted
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(new TextEncoder().encode(JWT_SECRET));

    return token;
  }

  async register(data) {
    let user = await User.findOne({ email: data.email });
    if (user) throw new CustomError("Email already exists");

    user = new User(data);
    await user.save();
    // Request email verification
    try {
      await this.requestEmailVerification(user.email);
    } catch (error) {
      await user.remove();
      throw new CustomError("Email verification failed");
    }

    return (data = {
      uid: user._id,
      email: user.email,
      role: user.role,
      verified: user.isVerified
    });
  }

  async login(data) {
    if (!data.email) throw new CustomError("Email is required");
    if (!data.password) throw new CustomError("Password is required");

    // Check if user exist
    const user = await User.findOne({ email: data.email });
    if (!user) throw new CustomError("Incorrect email or password");

    //Check if user password is correct
    const isCorrect = await bcrypt.compare(data.password, user.password);
    if (!isCorrect) throw new CustomError("Incorrect email or password");

    // check if user is verified
    if (!user.isVerified) throw new CustomError("User is not verified");

    const token = await this._getLoginToken(user);

    return (data = {
      uid: user._id,
      email: user.email,
      role: user.role,
      verified: user.isVerified,
      token: token
    });
  }

  async verifyEmail(data) {
    const { userId, verifyToken, login } = data;

    const user = await User.findOne({ _id: userId });
    if (!user) throw new CustomError("User does not exist");
    if (user.isVerified) throw new CustomError("Email is already verified");

    const VToken = await Token.findOne({ userId });
    if (!VToken) throw new CustomError("Invalid or expired token");

    const isValid = await bcrypt.compare(verifyToken, VToken.token);
    if (!isValid) throw new CustomError("Invalid or expired password");

    await User.updateOne({ _id: userId }, { $set: { isVerified: true } }, { new: true });

    await VToken.deleteOne();

    await registrationService.updateRegistrationsToUser(user);

    if (login) {
      const loginToken = await this._getLoginToken(user);

      return { loginToken };
    }

    return;
  }

  async requestEmailVerification(email) {
    const user = await User.findOne({ email });
    if (!user) throw new CustomError("Email does not exist");
    if (user.isVerified) throw new CustomError("Email is already verified");

    const token = await Token.findOne({ userId: user._id });
    if (token) await token.deleteOne();

    const verifyToken = crypto.randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(verifyToken, BCRYPT_SALT);

    await new Token({
      userId: user._id,
      token: hash,
      createdAt: Date.now()
    }).save();

    const link = `${url.CLIENT_URL}/email-verification?uid=${user._id}&verifyToken=${verifyToken}&login=true`;

    // Send Mail
    await new MailService(user).sendEmailVerificationMail(link);

    return;
  }

  
  async requestPasswordReset(email) {
    const user = await User.findOne({ email });
    if (!user) throw new CustomError("Email does not exist");

    const token = await Token.findOne({ userId: user._id });
    if (token) await token.deleteOne();

    const resetToken = crypto.randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(resetToken, BCRYPT_SALT);

    await new Token({
      userId: user._id,
      token: hash,
      createdAt: Date.now()
    }).save();

    const link = `${url.CLIENT_URL}/reset-password?uid=${user._id}&resetToken=${resetToken}`;

    // Send Mail
    await new MailService(user).sendPasswordResetMail(link);

    return;
  }

  async resetPassword(data) {
    const { userId, resetToken, password } = data;

    const RToken = await this.verifyResetToken({ userId, resetToken });

    const hash = await bcrypt.hash(password, BCRYPT_SALT);

    await User.updateOne({ _id: userId }, { $set: { password: hash } }, { new: true });

    await RToken.deleteOne();

    return;
  }

  async verifyResetToken(data) {
    const { userId, resetToken } = data;

    const RToken = await Token.findOne({ userId });
    if (!RToken) throw new CustomError("Invalid or expired password reset token");

    const isValid = await bcrypt.compare(resetToken, RToken.token);
    if (!isValid) throw new CustomError("Invalid or expired password reset token");

    return RToken;
  }

  async updatePassword(userId, data) {
    const user = await User.findOne({ _id: userId });
    if (!user) throw new CustomError("User dose not exist");

    //Check if user password is correct
    const isCorrect = await bcrypt.compare(data.password, user.password);
    if (!isCorrect) throw new CustomError("Incorrect password");

    const hash = await bcrypt.hash(password, BCRYPT_SALT);

    await User.updateOne({ _id: userId }, { $set: { password: hash } }, { new: true });

    return;
  }

  async verifyLoginToken(token) {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
    const user = await User.findById(payload.id);
    if (!user) throw new CustomError("Invalid token");

    return user;
  }
}

export default new AuthService();
