const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

// load model
const User = require("../../models/User");

// import validator
const ValidateRegisterInput = require("../../validation/register");

// @route /api/user/test
// @desc test router user
// @access Public
router.get("/test", (req, res) => res.json({ msg: "User Work" }));

// @route /api/user/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  const { errors, isValid } = ValidateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Hiện đã có một tài khoản với địa chỉ email này.";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        birthday: req.body.birthday,
        sex: req.body.sex
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
