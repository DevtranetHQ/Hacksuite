import { IUser } from "./user.model";
import { notificationService } from "./../notification/notifications.service";
import { NotificationTypeModel } from "./../notification/notification-type.model";
import { CustomError } from "../../utils/customError";

class AuthNotificationsService {
  async joinDiscordNotification(user: IUser) {
    const notificationType = await NotificationTypeModel.findOne({ name: `Discord` });
    if (!notificationType) throw new CustomError("Notification type not found");

    return notificationService.createNotification({
      for: user.uniqueId,
      by: `The Dynamics`,
      type: notificationType.uniqueId,
      title: "The Dynamics Discord Server!",
      message: "Join our discord server to stay up to date with the latest news and events!",
      link: "https://discord.com"
    });
  }
}

export const authNotificationsService = new AuthNotificationsService();
