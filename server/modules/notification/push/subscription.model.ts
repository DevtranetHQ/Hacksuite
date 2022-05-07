import mongoose from "../../../database";
import User from "../../auth/user.model";
import { PushSubscription } from "web-push";

const { Schema, model, models } = mongoose;

export interface ISubscription {
  userId: string;
  subscription: PushSubscription;
}

const SubscriptionSchema = new Schema<ISubscription>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: User,
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
