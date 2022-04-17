import { IntegrationCtrl } from "../../../../server/controllers/integration.controller";

export default function handler(req, res) {
    if (req.method === "POST") {
        return IntegrationCtrl.discordResendVerificationEmail(req, res);
    }
}
