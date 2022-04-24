import registrationService from "./registration.service";
import { CustomResponse } from "./../../utils/customResponse";
import { CustomError } from "../../utils/customError";

class RegistrationController {
    async _registerWithUserId(userId, eventId) {
        const registration = await registrationService.registerWithUserId(userId, eventId);
        return new CustomResponse(201, "Registration successful", registration);
    }

    async _registerWithEmail(email, name, eventId) {
        const registration = await registrationService.registerWithEmail(email, name, eventId);
        return new CustomResponse(201, "Registration successful", registration);
    }

    register(req) {
        if (req.body.email && req.body.name) {
            return this._registerWithEmail(req.body.email, req.body.name, req.query.eventId);
        } else if (req.$user) {
            return this._registerWithUserId(req.$user.id, req.query.eventId);
        } else {
            throw new CustomError(
                "Invalid registration data - You must be logged in or specify name and email",
                400
            );
        }
    }
}

const RegistrationCtrl = new RegistrationController();

export { RegistrationCtrl };
