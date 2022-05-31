import { CustomResponse } from "./../utils/customResponse";
import IntegrationService from "./../services/integration.service";
import discordAuthService from "../modules/auth/discord.service";

class IntegrationController {
  async discordEmailCheck(req) {
    const result = await IntegrationService.discordEmailCheck(req.body.email);
    return new CustomResponse(200, "user exists", result);
  }

  async addDiscordUser(req) {
    const { discordId, email } = req.body;
    const result = await discordAuthService.addDiscordUser(discordId, email);
    return new CustomResponse(201, "discord user added", result);
  }
}

const IntegrationCtrl = new IntegrationController();

export { IntegrationCtrl };
