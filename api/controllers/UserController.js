import mongoose from "mongoose"
import Task from "../models/Task"
import TaskController from "./TaskController"

const User = mongoose.model("User")

exports.login = async function(req, res) {
  const user = await User.findOne(req.body)

  if ( user ) {
    req.headers.userId = user.userId
    req.headers.username = user.username

    TaskController.get_all_tasks(req, res)
  } else {
    let new_user = await User.create(req.body)

    req.headers.userId = new_user.userId
    req.headers.username = new_user.username

    TaskController.get_all_tasks(req, res)
  }
}

// exports.login = function(req, res) {
//   User.findById(req.body.user, (err, user) => {
//     if (!err && user) {
//       TaskController.get_all_tasks(req, res);
//     } else {
//       res.status(422, err);
//     }
//   })
// }

// exports.create_user = function(req, res) {
//   User.create(req.body, function(err, doc){
//     if (!err) {
//       let return_doc = JSON.parse(JSON.stringify(doc))
//       delete(return_doc.password)

//       res.json(return_doc)
//     } else {
//       res.json('Failed to create user!')
//     }
//   })
// }