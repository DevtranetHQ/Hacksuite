import { IUser, UserId } from "./../auth/user.model";
import { EventId } from "./../../models/event.model";
import Event from "../../models/event.model";
import User from "../auth/user.model";
import Registration, { IRegistration } from "./registration.model";
import { CustomError } from "../../utils/customError";
import { registrationNotificationService } from "./reg-notification.service";
import { scheduleEventNotificationService } from "./schedule-notification.service";

class RegistrationService {
  async registerWithUserId(userId: UserId, uniqueId: EventId) {
    const event = await Event.findOne({ uniqueId });
    if (!event) throw new CustomError("Event does not exist", 404);

    const user = await User.findOne({ uniqueId: userId });
    if (!user) throw new CustomError("User does not exist", 404);

    const existing = await Registration.findOne({ user: userId, event: uniqueId });
    if (existing) return existing;

    const registration = new Registration({ user: userId, event: uniqueId });
    await registration.save();

    await registrationNotificationService.notifyNewRegistration(event, user);
    await scheduleEventNotificationService.scheduleNotification(event);

    return registration;
  }

  async registerWithEmail(email: string, name: string, uniqueId: EventId) {
    const event = await Event.findOne({ uniqueId });
    if (!event) throw new CustomError("Event does not exist", 404);

    const existingRegistrationWithEmail = await Registration.findOne({ email, event: uniqueId });
    if (existingRegistrationWithEmail) return existingRegistrationWithEmail;

    const existingUser = await User.findOne({ email, isCompleted: true });
    if (existingUser) {
      const existingRegistrationWithUser = await Registration.findOne({
        user: existingUser.uniqueId,
        event: uniqueId
      });
      if (existingRegistrationWithUser) return existingRegistrationWithUser;

      const registration = new Registration({
        user: existingUser.uniqueId,
        event: uniqueId
      });
      return registration.save();
    }

    const registration = new Registration({ name, email, event: uniqueId });
    return registration.save();
  }

  async checkRegistration(userId: UserId, uniqueId: EventId) {
    const registration = await Registration.findOne({ user: userId, event: uniqueId });

    return !!registration;
  }

  async updateRegistrationsToUser(user: IUser) {
    const registrations = await Registration.find({ email: user.email });

    const jobs = registrations.map(async registration => {
      registration.user = user.uniqueId;
      registration.email = null;
      registration.name = null;
      return registration.save();
    });

    await Promise.all(jobs);
  }
}

export default new RegistrationService();
