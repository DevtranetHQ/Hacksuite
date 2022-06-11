import mongoose, { ObjectId } from "mongoose";
import User from "../../modules/auth/user.model";
const Schema = mongoose.Schema;

export type EventId = string & { __isEventId: true };

export interface IEvent {
  uniqueId: EventId;
  name: string;
  description: string;
  image: string;
  start: Date;
  end: Date;
  creator: ObjectId;
  posted: Date;
  link: string;
}

const eventSchema = new Schema<IEvent>(
  {
    uniqueId: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      maxLength: [100, "name can't be more than 100 characters"],
      required: [true, "name is required"],
      trim: true
    },
    image: {
      type: String,
      required: true,
      match: [
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        "{VALUE isnt a valid link}"
      ]
    },
    description: {
      type: String,
      required: true,
      minlength: [10, "description has to be more than 10 characters"],
      maxLength: [3000, "description has to be less than 10 characters"]
    },
    start: {
      type: Date,
      required: true
    },
    end: {
      type: Date,
      required: true
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: ["creator is required"]
    },
    posted: {
      type: Date,
      default: Date.now
    },
    link: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Event = mongoose.models.event || mongoose.model("event", eventSchema);

export default Event;
