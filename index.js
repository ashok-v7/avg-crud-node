/*

Node.js server code that creates an Express application and sets up various middleware to handle HTTP requests. 

1.  importing the required modules.
    Import necessary modules: express, body-parser, sequelize, and the User model from the ./models/user file.
2.  creating an Express app.
3.  using the body-parser middleware to parse the request body.
4.  Set up CORS headers to allow requests from any origin.
5.  creating a test route,  test route that responds with "Hello World".
6.  creating the CRUD routes, 
     Use the /users route with the CRUD operations defined in the ./routes/users file.
7.  creating an error handling middleware.
8.  syncing the database using Sequelize and starting the server listening on port 3000.

This code sets up a basic web server that can handle requests related to user CRUD operations. 
It uses Sequelize as the ORM to interact with the database, and provides error handling to ensure a robust serve

*/

const express = require("express");
const bodyparser = require("body-parser");
const sequelize = require("./util/database");
const User = require("./models/user");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

//test route
app.get("/", (req, res, next) => {
  res.send("Hello World");
});

//routes for this app
app.use("/users", require("./routes/users"));

//error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

//sync database
sequelize
  .sync()
  .then((result) => {
    console.log("Database connected");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
