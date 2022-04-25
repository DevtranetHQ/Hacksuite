import { AuthCtrl } from "../../../server/controllers/auth.controller";
import { withGlobalMiddleware } from "./../../../server/middlewares/global.middleware";

function handler(req, res) {
  if (req.method === "POST") return AuthCtrl.resetPassword(req, res);

  res.status(405).send("Method Not Allowed");
}

export default withGlobalMiddleware(handler);
