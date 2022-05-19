import registrationService from "./registration.service";
import { CustomResponse } from "../../utils/customResponse";
import { CustomError } from "../../utils/customError";
import { EventId } from "../events/event.model";
import { UserId } from "../auth/user.model";
import { RequestWithUser } from "../../middlewares/auth.middleware";

class RegistrationController {
  async _registerWithUserId(userId: UserId, uniqueId: EventId) {
    const registration = await registrationService.registerWithUserId(userId, uniqueId);
    return new CustomResponse(201, "Registration successful", registration);
  }

  async _registerWithEmail(email: string, name: string, uniqueId: EventId) {
    const registration = await registrationService.registerWithEmail(email, name, uniqueId);
    return new CustomResponse(201, "Registration successful", registration);
  }

  register(req: RequestWithUser<{ email: string; name: string }, { uniqueId: EventId }>) {
    if (req.body.email && req.body.name) {
      return this._registerWithEmail(req.body.email, req.body.name, req.query.uniqueId);
    } else if (req.$user) {
      return this._registerWithUserId(req.$user.uniqueId, req.query.uniqueId);
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
