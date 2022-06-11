import { debug } from "debug";
import { CustomError } from "./../../utils/customError";
import { config } from "../../config";
import Event, { EventId, IEvent } from "../events/event.model";
import { IUser } from "../auth/user.model";
import { NotificationTypeId } from "../notification/notification-type.model";
import { notificationService } from "../notification/notifications.service";
import Registration from "./registration.model";
import { dbConnect } from "../../database";

const {
  url: { CLIENT_URL }
} = config;

const eventNotificationLogger = debug(`app:event-notification`);

const getEventUrl = (uniqueId: EventId) => `${CLIENT_URL}/events/${uniqueId}`;

class RegistrationNotificationService {
  notifyNewRegistration(event: IEvent, user: IUser) {
    return notificationService.createNotification({
      title: `Registered for ${event.name}`,
      message: `You are registered for [${event.name}](${CLIENT_URL}/events/${event.uniqueId})! Make sure you add it to your calendar.`,
      type: "Event" as NotificationTypeId,
      for: user.uniqueId,
      by: `The Dynamics`,
      link: getEventUrl(event.uniqueId)
    });
  }

  notifyEventCancelled(event: IEvent, user: IUser) {
    return notificationService.createNotification({
      title: `Event ${event.name} cancelled`,
      message: `The event [${event.name}](${CLIENT_URL}/events/${event.uniqueId}) has been cancelled.`,
      type: "Event" as NotificationTypeId,
      for: user.uniqueId,
      by: `The Dynamics`,
      link: getEventUrl(event.uniqueId)
    });
  }

  notifyEventUpdated(event: IEvent, user: IUser) {
    return notificationService.createNotification({
      title: `Event ${event.name} updated`,
      message: `The event [${event.name}](${CLIENT_URL}/events/${event.uniqueId}) has been updated.`,
      type: "Event" as NotificationTypeId,
      for: user.uniqueId,
      by: `The Dynamics`,
      link: getEventUrl(event.uniqueId)
    });
  }

  async notify15MinutesBeforeEvent(eventId: EventId) {
    await dbConnect();
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
          message: `The event [${event.name}](${CLIENT_URL}/events/${event.uniqueId}) will start in 15 minutes.`,
          type: "Event" as NotificationTypeId,
          for: userId,
          by: `The Dynamics`,
          link: getEventUrl(event.uniqueId)
        });
      })
    );
  }
}

export const registrationNotificationService = new RegistrationNotificationService();
