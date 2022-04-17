import response from "./../utils/response";
import EventService from "./../services/event.service";

class EventContoller {
    async create(req, res) {
        const result = await EventService.create(req.body);
        res.status(201).send(response("event created", result));
    }

    async getAll(req, res) {
        const result = await EventService.getAll();
        res.status(200).send(response("All event", result));
    }

    async getOne(req, res) {
        const result = await EventService.getOne(req.params.eventId);
        res.status(200).send(response("event data", result));
    }

    async update(req, res) {
        const result = await EventService.update(req.params.eventId, req.body);
        res.status(200).send(response("event updated", result));
    }

    async delete(req, res) {
        const result = await EventService.delete(req.params.eventId);
        res.status(200).send(response("event deleted", result));
    }
}

const EventCtrl = new EventContoller();

export { EventCtrl };
