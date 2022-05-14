import { debug } from "debug";
import { CustomError } from "./../../utils/customError";
import { config } from "../../config";
import Event, { EventId, IEvent } from "../../models/event.model";
import { IUser } from "../auth/user.model";
import { NotificationTypeId } from "../notification/notification-type.model";
import { notificationService } from "../notification/notifications.service";
import Registration from "./registration.model";

const { url } = config;

const eventNotificationLogger = debug(`app:event-notification`);

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

  notifyEventCancelled(event: IEvent, user: IUser) {
    return notificationService.createNotification({
      title: `Event ${event.name} cancelled`,
      message: `The event [${event.name}](${url.CLIENT_URL}/events/${event.uniqueId}) has been cancelled.`,
      type: "Event" as NotificationTypeId,
      for: user.uniqueId,
      by: `The Dynamics`
    });
  }

  notifyEventUpdated(event: IEvent, user: IUser) {
    return notificationService.createNotification({
      title: `Event ${event.name} updated`,
      message: `The event [${event.name}](${url.CLIENT_URL}/events/${event.uniqueId}) has been updated.`,
      type: "Event" as NotificationTypeId,
      for: user.uniqueId,
      by: `The Dynamics`
    });
  }

  async notify15MinutesBeforeEvent(eventId: EventId) {
    const event = await Event.findOne({ uniqueId: eventId });

    if (!event) {
      throw new CustomError(`Event with id ${eventId} not found`, 404);
    }

    eventNotificationLogger(`15 minutes before event ${event.name}, sending notifications`);

    const registrations = await Registration.find({ event: event.uniqueId });

    return Promise.all(
      registrations.map(async registration => {
        const userId = registration.user;
        if (!userId) {
          return;
        }

        return notificationService.createNotification({
          title: `Event ${event.name}`,
          message: `The event [${event.name}](${url.CLIENT_URL}/events/${event.uniqueId}) will start in 15 minutes.`,
          type: "Event" as NotificationTypeId,
          for: userId,
          by: `The Dynamics`
        });
      })
    );
  }
}

export const registrationNotificationService = new RegistrationNotificationService();
