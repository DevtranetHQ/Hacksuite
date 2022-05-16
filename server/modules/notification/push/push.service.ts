import debug from "debug";
import { INotification } from "../notification.model";
import webPush, { PushSubscription, WebPushError } from "web-push";
import { config } from "../../../config";
import { ISubscription, SubscriptionModel } from "./subscription.model";
import { UserId } from "../../auth/user.model";

const { vapid } = config;

webPush.setVapidDetails("https://thedynamics.tech", vapid.publicKey, vapid.privateKey);

const logger = debug(`app:push`);

class PushService {
  async sendPushNotification(notification: INotification) {
    const userId = notification.for;

    const subscriptions = await SubscriptionModel.find({ userId });
    if (!subscriptions) {
      throw new Error(`Subscriptions not found for user ${userId}`);
    }

    return Promise.all(
      subscriptions.map(async subscription => {
        try {
          await webPush.sendNotification(subscription.subscription, JSON.stringify(notification));
          logger(`Notification sent to ${userId} ${subscription.subscription.endpoint}`);
        } catch (error) {
          logger(`Notification failed to send to ${userId} ${subscription.subscription.endpoint}`);
          if (error instanceof WebPushError) {
            if (error.statusCode === 404 || error.statusCode === 410) {
              logger(
                `Subscription expired for ${userId} ${subscription.subscription.endpoint}, deleting`
              );
              return subscription.remove();
            }
          }
          throw error;
        }
      })
    );
  }

  async subscribeUser(userId: UserId, subscription: PushSubscription) {
    const existingSubscription = await SubscriptionModel.findOne({
      userId,
      "subscription.endpoint": subscription.endpoint
    });

    if (!existingSubscription) {
      const newSubscription = new SubscriptionModel<ISubscription>({ userId, subscription });
      return newSubscription.save();
    }

    return existingSubscription;
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
