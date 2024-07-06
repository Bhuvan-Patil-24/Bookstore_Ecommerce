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
});

export default mongoose.model("Admin", adminSchema);
