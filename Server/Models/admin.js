import mongoose from "mongoose";

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  adminName: {
    type: String,
    required: true,
  },
  adminPassword: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["superadmin", "admin"],
    default: "admin",
  },
});

export default mongoose.model("Admin", adminSchema);
