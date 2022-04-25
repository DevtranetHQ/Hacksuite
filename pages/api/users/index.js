import { UserCtrl } from "../../../server/controllers/user.controller";
import { withGlobalMiddleware } from "./../../../server/middlewares/global.middleware";

function handler(req, res) {
  if (req.method === "GET") {
    return UserCtrl.getAll(req, res);
  }

  if (req.method === "POST") {
    return UserCtrl.create(req, res);
  }
}

export default withGlobalMiddleware(handler);
