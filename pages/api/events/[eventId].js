import { EventCtrl } from "../../../server/controllers/event.controller";

export default function handler(req, res) {
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
