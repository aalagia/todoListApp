# Introduction
This is an example todo list project, developed in the following technologies:

- Node JS
- React JS
- MongoDB
- Express JS

# Use instructions
To run this project follow these steps

- Clone it
- Go to the todolist-backend and run the command ´npm install´
- Go to the todolist-frontend and run the command ´npm install´
- Go to the root directory
- Run "docker-compose build"
- Run "docker-compose up"

# Backend REST API

- POST api/users/register (create user if doesn't exist)
- GET api/todos/:username (Return a list that contains the todos for the user)
- GET api/todo/:id (Return a single todo)
- POST api/add (create a todo for the user)
- PUT api/:id (modify todo)

# Test
The tests was excuted with POSTMAN. In the folder test_postman is possible to found the json to load in POSTMAN application
