import { withAuth } from "../../../server/middlewares/auth.middleware";
import { RegistrationCtrl } from "../../../server/modules/registration/registration.controller";
import { withGlobalMiddleware } from "../../../server/middlewares/global.middleware";

function handler(req, res) {
  if (req.method === "POST") {
    return RegistrationCtrl.register(req);
  }
}

export default withGlobalMiddleware(withAuth(handler));
