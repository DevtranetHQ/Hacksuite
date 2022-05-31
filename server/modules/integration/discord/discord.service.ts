import userService from "../../auth/user.service";
import authService from "../../auth/auth.service";
import { CustomError } from "../../../utils/customError";

class IntegrationService {
  async discordEmailCheck(email: string) {
    if (!email) throw new CustomError("email is required", 404);

    const user = await userService.getOneByEmail(email);

    if (!user.isVerified) throw new CustomError("User with email does not exist");

    return true;
  }

  async discordResendVerificationEmail(email: string) {
    if (!email) throw new CustomError("email is required");

    await authService.requestEmailVerification(email);

    return true;
  }
}

export const integrationService = new IntegrationService();
