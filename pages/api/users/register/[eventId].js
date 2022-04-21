import { UserCtrl } from "../../../../server/controllers/user.controller";
import { withGlobalMiddleware } from "./../../../../server/middlewares/global.middleware";

async function handler(req, res) {
    if (req.method === "POST") {
        return UserCtrl.registerForEvent(req, res);
    }
}

export default withGlobalMiddleware(handler);
