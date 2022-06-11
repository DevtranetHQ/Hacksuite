import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

export type CategoryId = string & { __isCategoryId: never };

export interface ICategory {
  uniqueId: CategoryId;
  name: string;
}

const categorySchema = new Schema<ICategory>(
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
    }
  },
  { timestamps: true }
);

export const Category: mongoose.Model<ICategory> =
  models.category || model<ICategory>("category", categorySchema);
