import User, { IUser, UserId } from "./user.model";
import { CustomError } from "../../utils/customError";
import authService from "./auth.service";
import { IProfile } from "../social/profile.model";
import { profileService } from "./../social/profile.service";

class UserService {
  async create(data: Partial<IUser>) {
    return await new User(data).save();
  }

  async getAll() {
    return await User.find({}, { password: 0, __v: 0 });
  }

  async getOne(userId: string): Promise<IUser> {
    const user = await User.findOne({ _id: userId }, { password: 0, __v: 0 });
    if (!user) throw new CustomError("User does not exist");

    return JSON.parse(JSON.stringify(user));
  }

  async getByUniqueId(uniqueId: UserId): Promise<IUser> {
    const user = await User.findOne({ uniqueId }, { password: 0, __v: 0 });
    if (!user) throw new CustomError("User does not exist", 404);

    return JSON.parse(JSON.stringify(user));
  }

  async getOneByEmail(email: string) {
    const user = await User.findOne({ email, isVerified: true }, { password: 0, __v: 0 });
    if (!user) throw new CustomError("User does not exist", 404);

    return user;
  }

  async completeProfile(userId: string, data: Partial<IProfile>) {
    const user = await User.findOne({ _id: userId, isCompleted: false });
    if (!user) throw new CustomError("User does not exist", 404);

    await profileService.update(user.uniqueId, { ...data, isCompleted: true });

    const newToken = await authService._getLoginToken(user);

    return newToken;
  }

  async delete(userId: string) {
    const user = await User.findOne({ _id: userId });
    user.remove();
    return user;
  }
}

export default new UserService();
