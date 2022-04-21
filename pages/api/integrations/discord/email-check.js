import { IntegrationCtrl } from "../../../../server/controllers/integration.controller";
import { withCors } from "../../../../server/middlewares/cors.middleware";

function handler(req, res) {
    if (req.method === "POST") {
        return IntegrationCtrl.discordEmailCheck(req, res);
    }
}

export default withCors(handler);
