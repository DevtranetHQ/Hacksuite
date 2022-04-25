import { CustomResponse } from "./../utils/customResponse";
import UserService from "./../modules/auth/user.service";

class UserContoller {
  async create(req) {
    const result = await UserService.create(req.body);
    return new CustomResponse(200, "User created", result);
  }

  async getAll(req) {
    const result = await UserService.getAll();
    return new CustomResponse(200, "all users", result);
  }

  async getOne(req) {
    const result = await UserService.getOne(req.query.userId);
    return new CustomResponse(200, "user data", result);
  }

  async registerForEvent(req) {
    const result = await UserService.registerForEvent(req.$user._id, req.query.eventId);
    return new CustomResponse(200, "user registered for event", result);
  }

  async update(req) {
    const result = await UserService.update(req.query.userId, req.body);
    return new CustomResponse(200, "user updated", result);
  }

  async delete(req) {
    const result = await UserService.delete(req.query.userId);
    return new CustomResponse(200, "user deleted", result);
  }
}

const UserCtrl = new UserContoller();

export { UserCtrl };
