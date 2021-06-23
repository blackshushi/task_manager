# Installation Guide

1. Install [Docker Compose](https://docs.docker.com/compose/install/)

2. Run ```docker-compose up```
(Server entry-point : localhost:3000)

# Api Documentation
https://documenter.getpostman.com/view/8942269/TzecBPur

# Feature  List

1. Login
  User login with userId and username.

2. Get All Tasks
  Query Database for existed user.

3. Create Task
  Create a new task (record) for user.

4. Edit Task
  Update specific task's information.

5. Delete Task
  Delete specific task.

6. Read Task
  Get specific task information.

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
