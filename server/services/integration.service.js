import userService from "../modules/auth/user.service";
import authService from "../modules/auth/auth.service";
import { CustomError } from "./../utils/customError";

class IntegrationService {
  async discordEmailCheck(email) {
    if (!email) throw new CustomError("email is required", 404);

    const user = await userService.getOneByEmail(email);

    if (!user.isVerified) throw new CustomError("User with email does not exist");

    return user;
  }

  async discordResendVerificationEmail(data) {
    if (!data.email) throw new CustomError("email is required");

    await authService.requestEmailVerification(data.email);

    return true;
  }
}

export default new IntegrationService();
