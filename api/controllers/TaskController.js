import mongoose from "mongoose"

const Task = mongoose.model("Task");
const User = mongoose.model('User');

exports.get_all_tasks = async function(req, res) {
  let user = await User.findOne({username: req.headers.username})
  const user_id = user._id

  let tasks = await Task.find({user: user_id})

  if (tasks) {
    res.json({tasks: tasks, user: user});
  } else {
    res.json('Failed to fetch all tasks')
  }
}

exports.create_task = async function(req, res) {
  let user = await User.findOne({username: req.headers.username})
  req.headers.username = user.username
  req.body.user = user._id

  let task = await Task.create(req.body);

  if (task) {
    const refetchTask = await Task.findById(task._id).populate('user', '-_id -__v -password');

    res.json(refetchTask);
  } else {
    res.json('Failed to create task')
  }
}

exports.read_task = async function(req, res) {
  const task = await Task.findById(req.params.taskId).populate('user', '-_id -__v -password');
  
  if (task) {
    res.json(task);
  } else {
    res.json('Failed to read task')
  }
}

exports.update_task = async function (req, res) {
  const task = await Task.findByIdAndUpdate(req.params.taskId, req.body)
  const refetchTask = await Task.findById(req.params.taskId).populate('user', '-_id -__v -password');

  if (refetchTask) {
    res.json(refetchTask);
  } else {
    res.json('Failed to update task')
  }
}

exports.delete_task = async function(req, res) {
  const task = await Task.findByIdAndRemove(req.params.taskId).populate('user', '-_id -__v -password')

  if (task) {
    res.json(task);
  } else {
    res.json('Failed to delete task')
  }
}