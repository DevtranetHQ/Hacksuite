import { config } from "../../config";
import { IEvent } from "../../models/event.model";
import { IUser } from "../auth/user.model";
import { NotificationTypeId } from "../notification/notification-type.model";
import { notificationService } from "../notification/notifications.service";

const { url } = config;

class RegistrationNotificationService {
  notifyNewRegistration(event: IEvent, user: IUser) {
    return notificationService.createNotification({
      title: `Registered for ${event.name}`,
      message: `You are registered for [${event.name}](${url.CLIENT_URL}/events/${event.uniqueId})! Make sure you add it to your calendar.`,
      type: "Event" as NotificationTypeId,
      for: user.uniqueId,
      by: `The Dynamics`
    });
  }
}

export const registrationNotificationService = new RegistrationNotificationService();
