import { UserCtrl } from "../../../../server/controllers/user.controller";

export default async function handler(req, res) {
    if (req.method === "POST") {
        return UserCtrl.registerForEvent(req, res);
    }
}

