import dayjs from "dayjs";
import mongoose from "mongoose";
import { UserId } from "../auth/user.model";
import { genders, countryNames, describes, skillsAndInterests, availableFor } from "../../../enums";
import { IProject } from "../projects/project.model";
import { IPostWithUser } from "../scrapbook/post";

const { Schema, models, model } = mongoose;

export interface IProfile {
  _id: string;
  userId: UserId;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  countryOfResidence: string;
  describe: string[];
  skills: string[];
  availableFor: string[];
  headline: string;
  dob: string;
  role: string;
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

  followers: UserId[];
  projects: IProject[];
  scrapbook: IPostWithUser[];

  age?: number;
  fullName?: string;

  isCompleted: boolean;

  discordUsername?: string;
}

export interface IProfileVirtuals {
  age: number;
  fullName: string;
}

export type IProfileModel = mongoose.Model<IProfile, {}, {}, IProfileVirtuals>;

const urlSchema: mongoose.SchemaDefinitionProperty<string> = {
  type: String,
  trim: true,
  match: [
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
    "{VALUE} is not a valid URL"
  ]
};

const profileSchema = new Schema<IProfile, IProfileModel>(
  {
    userId: {
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
      lowerCase: true
    },
    phoneNumber: {
      type: String,
      trim: true,
      match: [/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, "{VALUE} not a valid phone number"]
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
    availableFor: [
      {
        type: String,
        enum: {
          values: availableFor,
          message: "{VALUE} is not a valid value for availability"
        }
      }
    ],
    headline: {
      type: String,
      trim: true,
      maxLength: [100, "Headline can't be more than 100 characters"]
    },
    dob: String,
    role: {
      type: String,
      trim: true,
      enum: ["user", "admin"],
      default: "user"
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
    followers: {
      type: [String],
      default: []
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    discordUsername: String
  },
  { timestamps: true }
);

profileSchema.virtual("age").get(function () {
  return dayjs(this.dob).diff(dayjs(), "year");
});

profileSchema
  .virtual("fullName")
  .get(function () {
    return `${this.firstName} ${this.lastName}`;
  })
  .set(function (v) {
    const [firstName, lastName] = v.split(" ");
    this.set({ firstName, lastName });
  });

export const Profile: IProfileModel = models.profile || model<IProfile>("profile", profileSchema);
