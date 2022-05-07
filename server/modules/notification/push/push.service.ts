import { INotification } from "../notification.model";
import { setVapidDetails, sendNotification, PushSubscription } from "web-push";
import { config } from "../../../config";
import { SubscriptionModel } from "./subscription.model";

const { vapid } = config;

setVapidDetails("https://thedynamics.tech", vapid.publicKey, vapid.privateKey);

class PushService {
  async sendPushNotification(notification: INotification) {
    const userId = notification.for;

    const subscriptions = await SubscriptionModel.find({ userId });
    if (!subscriptions) {
      throw new Error(`Subscriptions not found for user ${userId}`);
    }

    return Promise.all(
      subscriptions.map(subscription => {
        return sendNotification(subscription.subscription, JSON.stringify(notification));
      })
    );
  }

  async subscribeUser(userId: string, subscription: PushSubscription) {
    const newSubscription = new SubscriptionModel({ userId, subscription });
    return newSubscription.save();
  }

  async unsubscribeUser(userId: string, endpoint: string) {
    const subscription = await SubscriptionModel.findOne({ userId, subscription: { endpoint } });
    if (!subscription) {
      throw new Error(`Subscription not found for user ${userId}`);
    }

    return subscription.remove();
  }
}

export const pushService = new PushService();
