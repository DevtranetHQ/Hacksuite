import mongoose from "mongoose";
import { EventId } from "../events/event.model";
import { UserId } from "../auth/user.model";

const { Schema, model, models } = mongoose;

export interface IRegistration {
  event: EventId;
  user?: UserId;
  email?: string;
  name?: string;
}

const registrationSchema = new Schema<IRegistration>(
  {
    event: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: false,
      trim: true
    },
    name: {
      type: String,
      required: false,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Registration: mongoose.Model<IRegistration> =
  models.registration || model("registration", registrationSchema);

export default Registration;
