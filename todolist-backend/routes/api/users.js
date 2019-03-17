// Load User model
const User = require("../../models/User");
var express = require("express");
var router = express.Router();


// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {

  User.findOne({ username: req.body.username }).then(user => {
      if (user) {
        return res.status(200).json({ username: "User already exists" });
      } 
    const newUser = new User({
          username : req.body.username
        });

    newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));

      
    });
  });

  module.exports = router;