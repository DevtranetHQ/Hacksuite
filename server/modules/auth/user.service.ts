import User, { IUser, UserId } from "./user.model";
import { CustomError } from "../../utils/customError";
import authService from "./auth.service";
import { IProfile } from "../social/profile.model";
import { profileService } from "./../social/profile.service";
import { dbConnect } from "../../database";

class UserService {
  async create(data: Partial<IUser>) {
    await dbConnect();
    return await new User(data).save();
  }

  async getAll() {
    await dbConnect();
    return await User.find({}, { password: 0, __v: 0 });
  }

  async getOne(userId: string): Promise<IUser> {
    await dbConnect();
    const user = await User.findOne({ _id: userId }, { password: 0, __v: 0 });
    if (!user) throw new CustomError("User does not exist");

    return JSON.parse(JSON.stringify(user));
  }

  async getByUniqueId(uniqueId: UserId): Promise<IUser> {
    await dbConnect();
    const user = await User.findOne({ uniqueId }, { password: 0, __v: 0 });
    if (!user) throw new CustomError("User does not exist", 404);

    return JSON.parse(JSON.stringify(user));
  }

  async getOneByEmail(email: string) {
    await dbConnect();
    const user = await User.findOne({ email, isVerified: true }, { password: 0, __v: 0 });
    if (!user) throw new CustomError("User does not exist", 404);

    return user;
  }

  async update(uniqueId: UserId, data: Partial<IUser>) {
    await dbConnect();
    const user = await User.findOne({ uniqueId: uniqueId });
    if (!user) throw new CustomError("User does not exist", 404);

    await User.updateOne({ uniqueId }, { $set: data });

    return await User.findOne({ uniqueId });
  }

  async completeProfile(userId: string, data: Partial<IProfile>) {
    await dbConnect();
    const user = await User.findOne({ _id: userId, isCompleted: false });
    if (!user) throw new CustomError("User does not exist", 404);

    await profileService.update(user.uniqueId, { ...data, isCompleted: true });

    user.isCompleted = true;
    await user.save();

    const newToken = await authService._getLoginToken(user);

    return newToken;
  }

  async delete(userId: string) {
    await dbConnect();
    const user = await User.findOne({ _id: userId });
    user.remove();
    return user;
  }
}

export default new UserService();
