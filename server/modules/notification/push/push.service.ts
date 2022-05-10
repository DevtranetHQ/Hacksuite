import { INotification } from "../notification.model";
import webPush, { PushSubscription } from "web-push";
import { config } from "../../../config";
import { ISubscription, SubscriptionModel } from "./subscription.model";
import { UserId } from "../../auth/user.model";

const { vapid } = config;

webPush.setVapidDetails("https://thedynamics.tech", vapid.publicKey, vapid.privateKey);

class PushService {
  async sendPushNotification(notification: INotification) {
    const userId = notification.for;

    const subscriptions = await SubscriptionModel.find({ userId });
    if (!subscriptions) {
      throw new Error(`Subscriptions not found for user ${userId}`);
    }

    return Promise.all(
      subscriptions.map(subscription => {
        return webPush.sendNotification(subscription.subscription, JSON.stringify(notification));
      })
    );
  }

  async subscribeUser(userId: UserId, subscription: PushSubscription) {
    const newSubscription = new SubscriptionModel<ISubscription>({ userId, subscription });
    return newSubscription.save();
  }

  async unsubscribeUser(userId: UserId, endpoint: string) {
    const subscription = await SubscriptionModel.findOne({
      userId,
      subscription: { endpoint }
    });
    if (!subscription) {
      throw new Error(`Subscription not found for user ${userId}`);
    }

    return subscription.remove();
  }
}

export const pushService = new PushService();
