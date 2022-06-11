import Event from "./event.model";
import { CustomError } from "../../utils/customError";
import { dbConnect } from "../../database";

class EventService {
  async create(data) {
    await dbConnect();
    return await new Event(data).save();
  }

  async getUpcomingEvents() {
    await dbConnect();
    const now = new Date();
    const events = await Event.find({ startDate: { $gt: now } }).populate(
      "creator",
      "_id firstName lastName image"
    );

    // TODO this is a hack-ish way to deal with objectid and date object, find a better way
    return events.map(event => JSON.parse(JSON.stringify(event)));
  }

  async getPastEvents() {
    await dbConnect();
    const now = new Date();
    const events = await Event.find({ endDate: { $lt: now } }).populate(
      "creator",
      "_id firstName lastName image"
    );

    return events.map(event => JSON.parse(JSON.stringify(event)));
  }

  async getOngoingEvents() {
    await dbConnect();
    const now = new Date();
    const events = await Event.find({ startDate: { $lte: now }, endDate: { $gte: now } }).populate(
      "creator",
      "_id firstName lastName image"
    );

    return events.map(event => JSON.parse(JSON.stringify(event)));
  }

  async getOne(uniqueId) {
    await dbConnect();
    const event = await Event.findOne({ uniqueId }).populate(
      "creator",
      "_id firstName lastName image"
    );
    if (!event) throw new CustomError("Event does not exists");

    return JSON.parse(JSON.stringify(event));
  }

  async update(uniqueId, data) {
    await dbConnect();
    const event = await Event.findByIdAndUpdate({ uniqueId }, { $set: data }, { new: true });

    if (!event) throw new CustomError("Event dosen't exist", 404);

    return event;
  }

  async delete(uniqueId) {
    await dbConnect();
    const event = await Event.findOne({ uniqueId });
    event.remove();
    return event;
  }
}

export default new EventService();
