import mongoose from "../../database";
import User from "../auth/user.model";
import { NotificationTypeId } from "./notification-type.model";

const { Schema, model, models } = mongoose;

export interface INotification {
  id: string;
  title: string;
  message: string;
  type: NotificationTypeId;
  for: string;
  by: string;
  createdAt: Date;
  read: boolean;
}

const NotificationSchema = new Schema<INotification>(
  {
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    for: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: true
    },
    by: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
)

export const NotificationModel: mongoose.Model<INotification> = 
  models.notification || model<INotification>("notification", NotificationSchema);
