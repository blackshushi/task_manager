import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userId: String,
  username: String,
});

const User = mongoose.model("User", UserSchema);
export default User;
