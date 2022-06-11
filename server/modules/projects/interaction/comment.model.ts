import mongoose from "mongoose";
import { UserId } from "../../auth/user.model";
import { ProjectId } from "../project.model";

const { Schema, model, models } = mongoose;

export type CommentId = string & { __isCommentId: never };

export interface IComment {
  id: CommentId;
  userId: UserId;
  projectId: ProjectId;
  targetId: ProjectId | CommentId;
  content: string;
  createdAt: Date;
}

const commentSchema = new Schema<IComment>(
  {
    userId: {
      type: String,
      required: true
    },
    projectId: {
      type: String,
      required: true
    },
    targetId: {
      type: String,
      required: true
    },
    content: {
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

export const Comment: mongoose.Model<IComment> = models.comment || model("comment", commentSchema);
