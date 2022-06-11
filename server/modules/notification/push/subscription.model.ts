import mongoose from "mongoose";
import { UserId } from "../../auth/user.model";
import { PushSubscription } from "web-push";

const { Schema, model, models } = mongoose;

export interface ISubscription {
  userId: UserId;
  subscription: PushSubscription;
}

const SubscriptionSchema = new Schema<ISubscription>(
  {
    userId: {
      type: String,
      required: true
    },
    subscription: {
      type: Object,
      required: true
    }
  },
  { timestamps: true }
);

export const SubscriptionModel: mongoose.Model<ISubscription> =
  models.subscription || model<ISubscription>("subscription", SubscriptionSchema);
