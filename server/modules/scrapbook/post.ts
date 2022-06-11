import mongoose from "mongoose";
import { UserId } from "../../modules/auth/user.model";

const { Schema, models, model } = mongoose;

export type PostId = string & { __isEventId: true };

export interface IPost {
  _id: PostId;
  author: UserId;
  content: string;
  images: string[];
  createdAt: Date;
}

export interface IPostWithUser {
  _id: PostId;
  content: string;
  images: string[];
  createdAt: Date;
  author: {
    username?: string;
    image?: string;
  };
}

const postSchema = new Schema<IPost>(
  {
    author: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    images: {
      type: [String],
      required: true
    },
    createdAt: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Post: mongoose.Model<IPost> = models.post || model("post", postSchema);

export default Post;
