import mongoose, { Document, Model, Schema } from "mongoose";

export interface IConsultation extends Document {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  notes?: string;
  createdAt: Date;
}

const ConsultationSchema = new Schema<IConsultation>(
  {
    fullName: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    serviceType: {
      type: String,
      default: "General Consultation",
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Consultation: Model<IConsultation> =
  mongoose.models.Consultation ||
  mongoose.model<IConsultation>("Consultation", ConsultationSchema);

export default Consultation;
