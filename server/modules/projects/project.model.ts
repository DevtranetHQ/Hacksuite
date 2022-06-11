import mongoose from "mongoose";
import { UserId } from "../auth/user.model";

const { Schema, model, models } = mongoose;

export interface IProject {
  uniqueId: ProjectId;
  name: string;
  description: string;
  image: string;
  creator: UserId;
  collaborators: UserId[];
  tools: string[];
  stage: string;
  links: {
    kind: string;
    url: string;
  }[];
  published: boolean;
  publishedAt: Date;
}

export type ProjectId = string & { __isProjectId: never };

const projectSchema = new Schema<IProject>(
  {
    uniqueId: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      maxLength: [100, "name can't be more than 100 characters"],
      required: [true, "name is required"],
      trim: true
    },
    description: {
      type: String,
      required: true,
      minlength: [10, "description has to be more than 10 characters"],
      maxLength: [3000, "description has to be less than 10 characters"]
    },
    image: {
      type: String,
      required: true,
      match: [
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        "{VALUE isnt a valid link}"
      ]
    },
    creator: String,
    collaborators: [String],
    tools: [
      {
        type: String,
        required: true
      }
    ],
    stage: {
      type: String
      // required: true
    },
    links: [
      {
        kind: {
          type: String,
          required: true
        },
        url: {
          type: String,
          required: true,
          match: [
            /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            "{VALUE isnt a valid link}"
          ]
        }
      }
    ],
    published: {
      type: Boolean,
      default: false
    },
    publishedAt: Date
  },
  {
    timestamps: true
  }
);

export const Project: mongoose.Model<IProject> =
  models.project || model<IProject>("project", projectSchema);
