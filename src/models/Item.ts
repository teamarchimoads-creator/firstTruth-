import mongoose, { Document, Model, Schema } from "mongoose";

export interface IItem extends Document {
  title: string;
  description?: string;
  status: "pending" | "completed";
  createdAt: Date;
  updatedAt: Date;
}

const ItemSchema = new Schema<IItem>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [100, "Title cannot be more than 100 characters"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "Description cannot be more than 500 characters"],
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model recompilation in Next.js hot-reloads
const Item: Model<IItem> =
  mongoose.models.Item || mongoose.model<IItem>("Item", ItemSchema);

export default Item;
