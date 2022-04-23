import Event from "./../models/event.model";
import { CustomError } from "../utils/customError";

class EventService {
    async create(data) {
        return await new Event(data).save();
    }

    async getAll() {
        const events = await Event.find({}).populate("creator", "_id firstName lastName image");
        // TODO this is a hack-ish way to deal with objectid and date object, find a better way
        return events.map(event => JSON.parse(JSON.stringify(event)));
    }

    async getOne(eventId) {
        const event = await Event.findOne({ _id: eventId }).populate("creator", "_id firstName lastName image");
        if (!event) throw new CustomError("Event does not exists");

        return JSON.parse(JSON.stringify(event));
    }

    async update(eventId, data) {
        const event = await Event.findByIdAndUpdate(
            { _id: eventId },
            { $set: data },
            { new: true }
        );

        if (!event) throw new CustomError("Event dosen't exist", 404);

        return event;
    }

    async delete(eventId) {
        const event = await Event.findOne({ _id: eventId });
        event.remove();
        return event;
    }
}

export default new EventService();
