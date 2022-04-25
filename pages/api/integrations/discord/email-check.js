import { IntegrationCtrl } from "../../../../server/controllers/integration.controller";
import { withCors } from "../../../../server/middlewares/cors.middleware";
import { withGlobalMiddleware } from "./../../../../server/middlewares/global.middleware";

function handler(req, res) {
  if (req.method === "POST") {
    return IntegrationCtrl.discordEmailCheck(req, res);
  }
}

export default withCors(withGlobalMiddleware(handler));
