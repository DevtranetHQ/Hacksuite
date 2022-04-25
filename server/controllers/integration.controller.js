import { CustomResponse } from "./../utils/customResponse";
import IntegrationService from "./../services/integration.service";

class IntegrationContoller {
  async discordEmailCheck(req) {
    const result = await IntegrationService.discordEmailCheck(req.body);
    return new CustomResponse(201, "email check verified", result);
  }

  async discordResendVerificationEmail(req) {
    const result = await IntegrationService.discordResendVerificationEmail(req.body);
    return new CustomResponse(201, "email verification sent", result);
  }
}

const IntegrationCtrl = new IntegrationContoller();

export { IntegrationCtrl };
