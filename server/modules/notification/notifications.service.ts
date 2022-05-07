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
    return NotificationModel.find({ for: userId });
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

  async removeNotification(notificationId: string): Promise<INotification> {
    const notification = await NotificationModel.findById(notificationId);
    if (!notification) {
      throw new Error("Notification not found");
    }
    return notification.remove();
  }

  async createNotification(data: {
    id: string;
    title: string;
    message: string;
    type: NotificationTypeId;
    for: UserId;
    by: string;
  }): Promise<INotification> {
    const notificationType = await NotificationTypeModel.findById(data.type);
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
