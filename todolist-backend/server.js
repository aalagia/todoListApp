const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require('cors');

const users = require("./routes/api/users");
const todos = require("./routes/api/todos");

// DB Config
// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongodb'
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
const app = express();


app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
// Routes
app.use("/api/users", users);
app.use("/api/todos", todos);

const port = 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));