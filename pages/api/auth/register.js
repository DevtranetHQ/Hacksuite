import { AuthCtrl } from "../../../server/controllers/auth.controller";

export default function handler(req, res) {
    if (req.method === "POST") return AuthCtrl.register(req, res);

    res.status(405).send("Method not allowed");
}
