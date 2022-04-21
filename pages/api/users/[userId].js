import { UserCtrl } from "../../../server/controllers/user.controller";
import { withGlobalMiddleware } from "./../../../server/middlewares/global.middleware";

function handler(req, res) {
    if (req.method === "GET") {
        return UserCtrl.getOne(req, res);
    }

    if (req.method === "PUT") {
        return UserCtrl.update(req, res);
    }

    if (req.method === "DELETE") {
        return UserCtrl.delete(req, res);
    }
}

export default withGlobalMiddleware(handler);
