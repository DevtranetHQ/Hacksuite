import Event from "../../models/event.model";
import User from "../../models/user.model";
import Registration from "./registration.model";
import { CustomError } from "./../../utils/customError";

class RegistrationService {
    async registerWithUserId(userId, eventId) {
        const user = await User.findById(userId);

        if (!user) throw new CustomError("User does not exist", 404);

        const event = await Event.findById(eventId);

        if (!event) throw new CustomError("Event does not exist", 404);

        const existing = await Registration.findOne({ user: userId, event: eventId });
        if (existing) throw new CustomError("Already registered", 400);

        const registration = new Registration({ user: userId, event: eventId });
        await registration.save();

        return registration;
    }

    async registerWithEmail(email, name, eventId) {
        const existingUser = await User.findOne({ email, isCompleted: true });

        const existing = await Registration.findOne({ email, event: eventId });
        if (existing) throw new CustomError("Already registered", 400);

        const registration = new Registration({ event: eventId });

        if (!existingUser) {
            registration.email = email;
            registration.name = name;
        } else {
            registration.user = existingUser._id;
        }

        await registration.save();
    }

    async checkRegistration(userId, eventId) {
        const registration = await Registration.findOne({ user: userId, event: eventId });

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
