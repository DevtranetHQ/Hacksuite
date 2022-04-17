import { UserCtrl } from "../../../server/controllers/user.controller";

export default function handler(req, res) {
    if (req.method === "GET") {
        return UserCtrl.getAll(req, res);
    }

    if (req.method === "POST") {
        return UserCtrl.create(req, res);
    }
}
