import { AuthCtrl } from "../../../server/controllers/auth.controller";
import { withGlobalMiddleware } from "../../../server/middlewares/global.middleware";

function loginHandler(req, res) {
  if (req.method === "POST") return AuthCtrl.login(req, res);

  res.status(405).send("Method not allowed");
}

export default withGlobalMiddleware(loginHandler);
