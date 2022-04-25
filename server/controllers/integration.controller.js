import { CustomResponse } from "./../utils/customResponse";
import IntegrationService from "./../services/integration.service";
import discordAuthService from "../modules/auth/discord.service";

class IntegrationContoller {
  async discordEmailCheck(req) {
    const result = await IntegrationService.discordEmailCheck(req.body.email);
    return new CustomResponse(200, "user exists", result);
  }

  async addDiscordUser(req) {
    const { discordId, email } = req.body;
    const user = await discordAuthService.addDiscordUser(discordId, email);
    return new CustomResponse(201, "discord user added", user);
  }

  async discordResendVerificationEmail(req) {
    const result = await IntegrationService.discordResendVerificationEmail(req.body);
    return new CustomResponse(201, "email verification sent", result);
  }
}

const IntegrationCtrl = new IntegrationContoller();

export { IntegrationCtrl };
