import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  TaskName: String,
  IsCompleted: Boolean,

});

const Task = mongoose.model("Task", TaskSchema);
export default Task;
