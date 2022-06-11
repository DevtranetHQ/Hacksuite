import mongoose from "mongoose";
import { UserId } from "../../auth/user.model";
import { ProjectId } from "../project.model";
import { CommentId } from "./comment.model";

const { Schema, model, models } = mongoose;

export interface ILike {
  userId: UserId;
  targetId: ProjectId | CommentId;
  projectId: ProjectId;
  createdAt: Date;
}

const likeSchema = new Schema<ILike>(
  {
    userId: {
      type: String,
      required: true
    },
    targetId: {
      type: String,
      required: true
    },
    projectId: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
);

export const Like: mongoose.Model<ILike> = models.like || model("like", likeSchema);
