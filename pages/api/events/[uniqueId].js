import { EventCtrl } from "../../../server/controllers/event.controller";
import { withGlobalMiddleware } from "../../../server/middlewares/global.middleware";

function handler(req, res) {
  if (req.method === "GET") {
    return EventCtrl.getOne(req, res);
  }

  if (req.method === "PUT") {
    return EventCtrl.update(req, res);
  }

  if (req.method === "DELETE") {
    return EventCtrl.delete(req, res);
  }
}

export default withGlobalMiddleware(handler);
