import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { config } from "../../config";

const { BCRYPT_SALT } = config;

const { Schema } = mongoose;

export type UserId = string & { __isUserId: true };

export interface IUser {
  _id: string;
  uniqueId: UserId;
  email: string;
  role: string;
  discordId?: string;
  notify: boolean;
  password: string;
  isVerified: boolean;
  isCompleted: boolean;
}

const emailMatch: [RegExp, string] = [
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  "{VALUE} is not a valid email}"
];

const userSchema = new Schema<IUser>(
  {
    uniqueId: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email is required"],
      maxLength: [80, "Email can't be more than 80 characters"],
      immutable: true,
      lowerCase: true,
      match: emailMatch
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      min: 6
    },
    role: {
      type: String,
      trim: true,
      enum: ["user", "admin"],
      default: "user"
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    discordId: String,
    notify: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

/*middlewares*/
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const hash = await bcrypt.hash(this.password, BCRYPT_SALT);
  this.password = hash;
  next();
});

const User: mongoose.Model<IUser> = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
