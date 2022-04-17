import response from "./../utils/response";
import IntegrationService from "./../services/integration.service";

class IntegrationContoller {
    async discordEmailCheck(req, res) {
        const result = await IntegrationService.discordEmailCheck(req.body);
        res.status(201).send(response("email check verified", result));
    }

    async discordResendVerificationEmail(req, res) {
        const result = await IntegrationService.discordResendVerificationEmail(req.body);
        res.status(201).send(response("email verification sent", result));
    }
}

const IntegrationCtrl = new IntegrationContoller();

export { IntegrationCtrl };
