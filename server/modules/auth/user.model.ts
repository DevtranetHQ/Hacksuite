import mongoose from "../../database";
import bcrypt from "bcryptjs";
import dayjs from "dayjs";
import { config } from "../../config";
import {
  countryNames,
  describes,
  genders,
  levelsOfStudy,
  skillsAndInterests
} from "../../../enums";

const { BCRYPT_SALT } = config;

const { Schema } = mongoose;

export type UserId = string & { __isUserId: true };

export interface IUser {
  _id: string;
  uniqueId: UserId;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  levelOfStudy: string;
  gender: string;
  countryOfResidence: string;
  describe: string;
  skills: string;
  dob: string;
  role: string;
  isVerified: boolean;
  isCompleted: boolean;
  links?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    reddit?: string;
  };
  image: string;
  resume: string;
  discordId: string;

  notify: boolean;

  password: string;
}

export interface IUserVirtuals {
  age: number;
  fullName: string;
}

export type IUserModel = mongoose.Model<IUser, {}, {}, IUserVirtuals>;

const emailMatch: [RegExp, string] = [
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  "{VALUE} is not a valid email}"
];

const urlSchema: mongoose.SchemaDefinitionProperty<string> = {
  type: String,
  trim: true,
  match: [
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
    "{VALUE} is not a valid URL"
  ]
};

const userSchema = new Schema<IUser, IUserModel>(
  {
    uniqueId: {
      type: String,
      required: true,
      unique: true
    },
    firstName: {
      type: String,
      trim: true,
      maxLength: [50, "First name can't be more than 50 characters"],
      required: [true, "First name is required"],
      lowerCase: true
    },
    lastName: {
      type: String,
      trim: true,
      maxLength: [50, "Last name can't be more than 50 characters"],
      required: [true, "Last name is required"],
      lowerCase: true
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
    phoneNumber: {
      type: String,
      trim: true,
      match: [/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, "{VALUE} not a valid phone number"]
    },
    levelOfStudy: {
      type: String,
      enum: {
        values: levelsOfStudy,
        message: "{VALUE} is not a valid level of study"
      }
    },
    gender: {
      type: String,
      enum: {
        values: genders,
        message: "{VALUE} is not a valid gender"
      }
    },
    countryOfResidence: {
      type: String,
      enum: {
        values: countryNames,
        message: "{VALUE} is not a valid country}"
      }
    },
    describe: [
      {
        type: String,
        enum: {
          values: describes,
          message: "{VALUE} is not a valid value for describe"
        }
      }
    ],
    skills: [
      {
        type: String,
        enum: {
          values: skillsAndInterests,
          message: "{VALUE} is not a valid value for skills and interests"
        }
      }
    ],
    dob: String,
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
    links: {
      github: urlSchema,
      linkedin: urlSchema,
      twitter: urlSchema,
      facebook: urlSchema,
      instagram: urlSchema,
      reddit: urlSchema
    },
    image: urlSchema,
    resume: urlSchema,
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

/*virtual fields*/
userSchema.virtual("age").get(function () {
  return dayjs(this.dob).diff(dayjs(), "year");
});

userSchema
  .virtual("fullName")
  .get(function () {
    return this.firstName + " " + this.lastName;
  })
  .set(function (v) {
    const firstName = v.substring(0, v.indexOf(" "));
    const lastName = v.substring(v.indexOf(" ") + 1);
    this.set({ firstName, lastName });
  });

/*middlewares*/
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const hash = await bcrypt.hash(this.password, BCRYPT_SALT);
  this.password = hash;
  next();
});

const User: IUserModel = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
