import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    employee_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    profile_picture: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "InActive", "OnLeave"],
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("employee", employeeSchema);
