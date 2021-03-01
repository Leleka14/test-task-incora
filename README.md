# Test-Task-Incora
# Published on https://leleka14.github.io/test-task-incora/

## Table of contents
* [General info](#general-info)
* [Getting started](#getting-started)
* [Technologies](#technologies)

## General Info
This project is my test task for Incora company. It is a simple website built with React and Redux that allows you to see fetched information about some Users, Posts, Comments from https://jsonplaceholder.typicode.com. I've also used Bootstrap, Reactstrap and Font-awesome to make it look more user-friendly. As this API only fakes requests with methods such as POST, PUT, DELETE, after requests are successful, we can`t get updated data from the server, so to make it look like it was done, after creating new post, I pushed this post to array of posts in state and after deleting post, we are redirected to previous page of all posts, if it had been really deleted on server and request wasn't fake, then after refreshing, our application would have received updated data and deleted post wouldn't be part of it.

## Getting started
You can install this project locally using npm:
```
$ git clone https://github.com/Leleka14/test-task-incora.git
$ cd test-task-incora
$ npm install
$ npm start # open localhost:3000
```

## Technologies
Project is created with:
* React version: 17.0.1
* Redux version: 4.0.5
* Bootstrap version: 4.6.0
* Reactstrap version: 8.9.0
* React-router-dom version: 5.2.0
* React-redux version: 7.2.2
* React-dom version: 17.0.1
