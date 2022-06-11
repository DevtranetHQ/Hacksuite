import mongoose from "mongoose";
import { UserId } from "../auth/user.model";
import { NotificationTypeId } from "./notification-type.model";

const { Schema, model, models } = mongoose;

export interface INotification {
  _id: string;
  title: string;
  message: string;
  type: NotificationTypeId;
  for: UserId;
  by: string;
  createdAt: Date;
  read: boolean;
  link: string;
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
      type: String,
      required: true
    },
    by: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    read: {
      type: Boolean,
      default: false
    },
    link: {
      type: String
    }
  },
  { timestamps: true }
);

export const NotificationModel: mongoose.Model<INotification> =
  models.notification || model<INotification>("notification", NotificationSchema);
