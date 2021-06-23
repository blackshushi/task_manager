# Installation Guide

1. Install [Docker Compose](https://docs.docker.com/compose/install/)

2. Run ```docker-compose up```
(Server entry-point : localhost:3000)

# Api Documentation
https://documenter.getpostman.com/view/8942269/TzecBPur

# Feature  List

* Login
  - User login with userId and username.

* Get All Tasks
  - Query Database for existed user.

* Create Task
  - Create a new task (record) for user.

* Edit Task
  - Update specific task's information.

* Delete Task
  - Delete specific task.

* Read Task
  - Get specific task information.

# Models

## User
field:
1. userId : String
2. username : String

## Task
field:
1. TaskName : String
2. IsCompleted : Boolean
3. user : ObjectId
