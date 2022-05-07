import Event from "./../models/event.model";
import { CustomError } from "../utils/customError";

class EventService {
  async create(data) {
    return await new Event(data).save();
  }

  async getUpcomingEvents() {
    const now = new Date();
    const events = await Event.find({ startDate: { $gt: now } }).withCreator();

    // TODO this is a hack-ish way to deal with objectid and date object, find a better way
    return events.map(event => JSON.parse(JSON.stringify(event)));
  }

  async getPastEvents() {
    const now = new Date();
    const events = await Event.find({ endDate: { $lt: now } }).withCreator();

    return events.map(event => JSON.parse(JSON.stringify(event)));
  }

  async getOngoingEvents() {
    const now = new Date();
    const events = await Event.find({
      startDate: { $lte: now },
      endDate: { $gte: now }
    }).withCreator();

    return events.map(event => JSON.parse(JSON.stringify(event)));
  }

  async getOne(uniqueId) {
    const event = await Event.findOne({ uniqueId }).populate(
      "creator",
      "_id firstName lastName image"
    );
    if (!event) throw new CustomError("Event does not exists");

    return JSON.parse(JSON.stringify(event));
  }

  async update(uniqueId, data) {
    const event = await Event.findByIdAndUpdate({ uniqueId }, { $set: data }, { new: true });

    if (!event) throw new CustomError("Event dosen't exist", 404);

    return event;
  }

  async delete(uniqueId) {
    const event = await Event.findOne({ uniqueId });
    event.remove();
    return event;
  }
}

export default new EventService();
