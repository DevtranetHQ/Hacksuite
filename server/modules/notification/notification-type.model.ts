import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

export type NotificationTypeId = string & { __isNotificationTypeId: never };

export interface INotificationType {
  uniqueId: NotificationTypeId;
  name: string;
  color: string;
  icon: string;
}

const NotificationTypeSchema = new Schema<INotificationType>(
  {
    uniqueId: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export const NotificationTypeModel: mongoose.Model<INotificationType> =
  models.notificationType || model<INotificationType>("notificationType", NotificationTypeSchema);
