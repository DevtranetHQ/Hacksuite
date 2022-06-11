import mongoose from "mongoose";
import { UserId } from "../auth/user.model";
import { CategoryId } from "./category.model";

const { Schema, model, models } = mongoose;

export interface IWorkshop {
  uniqueId: WorkshopId;
  title: string;
  description: string;
  content: string;
  author: UserId;
  videoUrl?: string;
  imageUrl?: string;
  categoryId: CategoryId;
  published: boolean;
  publishedAt: Date;
}

export type WorkshopId = string & { __isWorkshopId: never };

const workshopSchema = new Schema<IWorkshop>(
  {
    uniqueId: {
      type: String,
      required: true,
      unique: true
    },
    title: {
      type: String,
      maxLength: [100, "name can't be more than 100 characters"],
      required: [true, "name is required"],
      trim: true
    },
    description: {
      type: String,
      maxLength: [500, "description can't be more than 500 characters"],
      required: [true, "description is required"],
      trim: true
    },
    content: {
      type: String,
      required: true
    },
    author: String,
    videoUrl: String,
    imageUrl: String,
    categoryId: {
      type: String,
      required: true
    },
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

export const Workshop: mongoose.Model<IWorkshop> =
  models.workshop || model<IWorkshop>("workshop", workshopSchema);
