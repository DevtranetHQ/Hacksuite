import { EventCtrl } from "../../../server/controllers/event.controller";

export default function handler(req, res) {
    if (req.method === "GET") {
        return EventCtrl.getAll(req, res);
    }

    if (req.method === "POST") {
        return EventCtrl.create(req, res);
    }
}
