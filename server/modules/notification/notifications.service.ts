import { pushService } from "./push/push.service";
import { NotificationModel, INotification } from "./notification.model";
import {
  INotificationType,
  NotificationTypeId,
  NotificationTypeModel
} from "./notification-type.model";
import { UserId } from "../auth/user.model";

class NotificationService {
  async getNotificationTypes(): Promise<INotificationType[]> {
    return NotificationTypeModel.find();
  }

  async getNotificationsForUser(userId: string): Promise<INotification[]> {
    const notifs = await NotificationModel.find({ for: userId });
    return notifs.map(notif => JSON.parse(JSON.stringify(notif)));
  }

  async checkUnreadNotifications(userId: string): Promise<boolean> {
    const notifications = await NotificationModel.count({ for: userId, read: false });
    return notifications > 0;
  }

  async getUnreadNotificationCountForUser(userId: string): Promise<number> {
    return NotificationModel.countDocuments({ for: userId, read: false });
  }

  async markNotificationAsRead(notificationId: string): Promise<INotification> {
    const notification = await NotificationModel.findById(notificationId);
    if (!notification) {
      throw new Error("Notification not found");
    }
    notification.read = true;
    return notification.save();
  }

  async removeNotification(notificationId: string, userId: UserId): Promise<INotification> {
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
  }): Promise<INotification> {
    const notificationType = await NotificationTypeModel.findOne({ uniqueId: data.type });
    if (!notificationType) {
      throw new Error("Notification type not found");
    }

    const newNotification = await NotificationModel.create({
      ...data,
      read: false,
      createdAt: new Date()
    });

    await pushService.sendPushNotification(newNotification);

    return newNotification;
  }
}

export const notificationService = new NotificationService();
