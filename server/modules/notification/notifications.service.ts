import { pushService } from "./push/push.service";
import { NotificationModel, INotification } from "./notification.model";
import {
  INotificationType,
  NotificationTypeId,
  NotificationTypeModel
} from "./notification-type.model";
import { UserId } from "../auth/user.model";
import { emailService } from "./email/email.service";
import { profileService } from "../social/profile.service";
import UserService from "../../../server/modules/auth/user.service";
import { dbConnect } from "../../database";

class NotificationService {
  async getNotificationTypes(): Promise<INotificationType[]> {
    await dbConnect();
    return NotificationTypeModel.find();
  }

  async getNotificationsForUser(userId: string): Promise<INotification[]> {
    await dbConnect();
    const notifs = await NotificationModel.find({ for: userId }, {}, { sort: { createdAt: -1 } });
    return notifs.map(notif => JSON.parse(JSON.stringify(notif)));
  }

  async getUnreadNotificationsForUser(userId: string): Promise<INotification[]> {
    await dbConnect();
    const notifs = await NotificationModel.find(
      { for: userId, read: false },
      {},
      { sort: { createdAt: -1 } }
    );
    return notifs.map(notif => JSON.parse(JSON.stringify(notif)));
  }

  async checkUnreadNotifications(userId: string): Promise<boolean> {
    await dbConnect();
    const notifications = await NotificationModel.count({ for: userId, read: false });
    return notifications > 0;
  }

  async getUnreadNotificationCountForUser(userId: string): Promise<number> {
    await dbConnect();
    return NotificationModel.countDocuments({ for: userId, read: false });
  }

  async markAllNotificationsAsRead(userId: UserId): Promise<void> {
    await dbConnect();
    await NotificationModel.updateMany({ for: userId }, { read: true });
  }

  async markNotificationAsRead(notificationId: string): Promise<INotification> {
    await dbConnect();
    const notification = await NotificationModel.findById(notificationId);
    if (!notification) {
      throw new Error("Notification not found");
    }
    notification.read = true;
    return notification.save();
  }

  async removeNotification(notificationId: string, userId: UserId): Promise<INotification> {
    await dbConnect();
    const notification = await NotificationModel.findOne({
      _id: notificationId,
      for: userId
    });
    if (!notification) {
      throw new Error("Notification not found");
    }
    return notification.remove();
  }

  async createNotification(data: {
    title: string;
    message: string;
    type: NotificationTypeId;
    for: UserId;
    by: string;
    link: string;
  }): Promise<INotification> {
    await dbConnect();
    const notificationType = await NotificationTypeModel.findOne({ uniqueId: data.type });
    if (!notificationType) {
      throw new Error("Notification type not found");
    }

    const newNotification = await NotificationModel.create({
      ...data,
      read: false,
      createdAt: new Date()
    });

    // TODO: Implement a function to check is user wants email notification
    const profile = await profileService.getCompletedProfile(data.for);
    const user = await UserService.getByUniqueId(data.for);

    if ("notify" in user && user.notify == true) {
      await emailService.sendEmailNotification(profile.email, newNotification);
    }

    await pushService.sendPushNotification(newNotification);

    return newNotification;
  }

  async updatePreference(userId: UserId, notify: boolean) {
    let user = await UserService.update(userId, {
      notify: notify
    });

    return user;
  }
}

export const notificationService = new NotificationService();
