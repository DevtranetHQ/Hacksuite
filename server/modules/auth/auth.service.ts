import bcrypt from "bcryptjs";
import crypto from "crypto";

import User, { IUser, UserId } from "./user.model";
import Token from "../../models/token.model";
import { CustomError } from "../../utils/customError";
import MailService from "../../services/mail.service";
import { config } from "../../config";
import registrationService from "../registration/registration.service";
import { signToken } from "../../utils/auth";
import { generateUniqueIdFromName } from "./../../utils/generateUniqueIdFromName";
import { authNotificationsService } from "./auth-notifications.service";
import { Profile } from "../social/profile.model";

const { BCRYPT_SALT, url } = config;

const randomNumber = Math.floor(Math.random() * 1000);
console.log(`server/modules/auth/auth.service`, { randomNumber });

class AuthService {
  async _getLoginToken(user: IUser) {
    const token = await signToken({
      id: user._id,
      uniqueId: user.uniqueId,
      role: user.role,
      isCompleted: user.isCompleted
    });

    console.log(`server/modules/auth/auth.service`, { randomNumber });
    return token;
  }

  async register(data: {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    notify: boolean;
  }) {
    const { firstName, lastName, password, email, notify } = data;
    let user = await User.findOne({ email: data.email });
    if (user) throw new CustomError("Email already exists");

    user = new User({ email, password, notify });

    const fullName = `${firstName} ${lastName}`;

    user.uniqueId = await generateUniqueIdFromName<UserId>(fullName, async uniqueId => {
      const exists = await User.exists({ uniqueId });
      return !!exists;
    });

    await user.save();
    const profile = await new Profile({ firstName, lastName, email, userId: user.uniqueId }).save();

    try {
      await this.requestEmailVerification(user.email);
    } catch (error) {
      console.error(error);
      await Promise.all([user.remove(), profile.remove()]);
      throw new CustomError("Server error", 500);
    }
    console.log(`server/modules/auth/auth.service`, { randomNumber });

    return {
      id: user._id,
      uniqueId: user.uniqueId,
      role: user.role,
      isCompleted: user.isCompleted
    };
  }

  async login(data: { email: any; password?: any }) {
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

    console.log(`server/modules/auth/auth.service`, { randomNumber });
    return {
      uid: user._id,
      email: user.email,
      role: user.role,
      verified: user.isVerified,
      token: token
    };
  }

  async verifyEmail(data: { userId: string; verifyToken: string; login?: boolean }) {
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

    await authNotificationsService.joinDiscordNotification(user);

    if (login) {
      const loginToken = await this._getLoginToken(user);

      return { loginToken };
    }

    return;
  }

  async requestEmailVerification(email: string) {
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

  async requestPasswordReset({ email, dob }) {
    const user = await User.findOne({ email, dob });
    if (!user) throw new CustomError("User does not exist");

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

  async resetPassword(data: { userId: string; resetToken: string; password: string }) {
    const { userId, resetToken, password } = data;

    const RToken = await this.verifyResetToken({ userId, resetToken });

    const hash = await bcrypt.hash(password, BCRYPT_SALT);

    await User.updateOne({ _id: userId }, { $set: { password: hash } }, { new: true });

    await RToken.deleteOne();

    return;
  }

  async verifyResetToken(data: { userId: string; resetToken: string }) {
    const { userId, resetToken } = data;

    const RToken = await Token.findOne({ userId });
    if (!RToken) throw new CustomError("Invalid or expired password reset token");

    const isValid = await bcrypt.compare(resetToken, RToken.token);
    if (!isValid) throw new CustomError("Invalid or expired password reset token");

    return RToken;
  }

  async updatePassword(userId: string, data: { password: string }) {
    const user = await User.findOne({ _id: userId });
    if (!user) throw new CustomError("User does not exist");

    //Check if user password is correct
    const isCorrect = await bcrypt.compare(data.password, user.password);
    if (!isCorrect) throw new CustomError("Incorrect password");

    const hash = await bcrypt.hash(data.password, BCRYPT_SALT);

    await User.updateOne({ _id: userId }, { $set: { password: hash } }, { new: true });
  }
}

export default new AuthService();
