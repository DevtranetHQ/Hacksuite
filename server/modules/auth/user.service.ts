import User, { IUser } from "./user.model";
import { CustomError } from "../../utils/customError";
import authService from "./auth.service";

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

  async getOneByEmail(email: string) {
    const user = await User.findOne({ email, isVerified: true }, { password: 0, __v: 0 });
    if (!user) throw new CustomError("User does not exist", 404);

    return user;
  }

  async update(userId: string, data: Partial<IUser>) {
    const oldUser = await User.findByIdAndUpdate(
      { _id: userId },
      { $set: { ...data, isCompleted: true } },
      { runValidators: true }
    );
    if (!oldUser) throw new CustomError("User dosen't exist", 404);

    if (!oldUser.isCompleted) {
      const newUser = await User.findById(userId);
      console.log({ oldUser, newUser });
      const newToken = await authService._getLoginToken(newUser);
      return {
        newToken,
        ...newUser
      };
    }

    return User.findById(userId);
  }

  async delete(userId: string) {
    const user = await User.findOne({ _id: userId });
    user.remove();
    return user;
  }
}

export default new UserService();
