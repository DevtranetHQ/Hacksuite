import mongoose from "../../database";
import User from "../auth/user.model";

const { Schema, model, models } = mongoose;

export interface IProject {
  name: string;
  description: string;
  image: string;
  creator: string;
  collaborators: string[];
  tools: string[];
  stage: string;
  links: {
    kind: string;
    url: string;
  }[];
  published: boolean;
}

const projectSchema = new Schema<IProject>(
  {
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
    creator: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: [true, "creator is required"]
    },
    collaborators: [{
      type: Schema.Types.ObjectId,
      ref: User,
    }],
    tools: [{
      type: String,
      required: true,
    }],
    stage: {
      type: String,
      required: true,
    },
    links: [{
      kind: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
        match: [
          /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
          "{VALUE isnt a valid link}"
        ]
      }
    }],
    published: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export const Project: mongoose.Model<IProject> =
  models.project || model<IProject>("project", projectSchema);
