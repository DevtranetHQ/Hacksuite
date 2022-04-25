import { EventCtrl } from "../../../server/controllers/event.controller";
import { withGlobalMiddleware } from "./../../../server/middlewares/global.middleware";

function handler(req, res) {
  if (req.method === "GET") {
    return EventCtrl.getAll(req, res);
  }

  if (req.method === "POST") {
    return EventCtrl.create(req, res);
  }
}

export default withGlobalMiddleware(handler);
