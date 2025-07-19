
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  photo: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  creditBalance: { type: Number, default: 5 }, 
});

const userModel = mongoose.model("User", userSchema);
export default userModel;
