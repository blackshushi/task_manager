/* @flow */
import mongoose from 'mongoose'
import morgan from 'morgan';
import express from 'express';
import path from 'path';
import helmet from 'helmet';
import hpp from 'hpp';
import chalk from 'chalk';
import _ from 'lodash';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';

function setupAPI() {
  const app = express();
  const access_port = 3000;

  // Using helmet to secure Express with various HTTP headers
  app.use(helmet());
  // Prevent HTTP parameter pollution.
  app.use(hpp());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  // Compress all requests
  app.use(compression());

  // Use morgan for http request debug (only show error)
  app.use(morgan('dev'));

  app.use(cookieParser());

  setupRoutes(app);
  setupViews(app);

  app.listen(access_port);
  console.log('tasks manager RESTful API server started on: ' + access_port);
};

function setupDB(){
  const mongo_db_url = "mongodb://notadmin:nodejs@167.71.217.118:27017/nodejs";

  mongoose.connect(mongo_db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }, 
  err => {
    if(!err){
      console.log("Connected to Mongo DB!")
    }else {
      console.log(`Failed to connect Mongo DB ${err}`)
    }
  }
  )

  console.log(mongoose.models)
  require('../api/models/Task');
  require('../api/models/User');
}

function setupRoutes(app) {
  const TaskController = require('../api/controllers/TaskController')
  const UserController = require('../api/controllers/UserController')

  app.route('/users')
    .get(UserController.login)

  app.route('/tasks')
    .get(TaskController.get_all_tasks)
    .post(TaskController.create_task);

  app.route('/tasks/:taskId')
    .get(TaskController.read_task)
    .put(TaskController.update_task)
    .delete(TaskController.delete_task);
}

function setupViews(app) {
  app.set('views', path.join('./api/', 'views'));
  app.set('json spaces', 40);
  app.set('view engine', 'jade');
}

setupDB()
setupAPI()
