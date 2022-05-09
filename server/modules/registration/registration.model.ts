import mongoose from "../../database";
import { EventId } from "../../models/event.model";
import User from "../auth/user.model";

const { Schema, model, models } = mongoose;

export interface IRegistration {
  event: EventId;
  user?: string;
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
      type: Schema.Types.ObjectId,
      required: false,
      ref: User
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
