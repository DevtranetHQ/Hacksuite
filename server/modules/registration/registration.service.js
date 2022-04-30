import Event from "../../models/event.model";
import User from "../auth/user.model";
import Registration from "./registration.model";
import { CustomError } from "../../utils/customError";

class RegistrationService {
  async registerWithUserId(userId, uniqueId) {
    const event = await Event.findOne({ uniqueId });
    if (!event) throw new CustomError("Event does not exist", 404);

    const user = await User.findById(userId);
    if (!user) throw new CustomError("User does not exist", 404);

    const existing = await Registration.findOne({ user: userId, event: uniqueId });
    if (existing) return existing;

    const registration = new Registration({ user: userId, event: uniqueId });
    await registration.save();

    return registration;
  }

  async registerWithEmail(email, name, uniqueId) {
    const event = await Event.findOne({ uniqueId });
    if (!event) throw new CustomError("Event does not exist", 404);

    const existingRegistrationWithEmail = await Registration.findOne({ email, event: uniqueId });
    if (existingRegistrationWithEmail) return existingRegistrationWithEmail;

    const existingUser = await User.findOne({ email, isCompleted: true });

    const existingWithUser = await Registration.findOne({ user: existingUser._id, event: uniqueId });
    if (existingWithUser) return existingWithUser;

    const registration = new Registration({ event: uniqueId });

    if (!existingUser) {
      registration.email = email;
      registration.name = name;
    } else {
      registration.user = existingUser._id;
    }

    await registration.save();
  }

  async checkRegistration(userId, uniqueId) {
    const registration = await Registration.findOne({ user: userId, event: uniqueId });

    return !!registration;
  }

  async updateRegistrationsToUser(user) {
    const registrations = await Registration.find({ email: user.email });

    const jobs = registrations.map(async registration => {
      registration.user = user._id;
      registration.email = null;
      registration.name = null;
      return registration.save();
    });

    await Promise.all(jobs);
  }
}

export default new RegistrationService();
