const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const keys = require("../../config/keys");
// load model
const User = require("../../models/User");

// import validator
const ValidateRegisterInput = require("../../validation/register");
const ValidateLoginInput = require("../../validation/login");

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

// @route /api/users/login
// @desc Login User / Returning JWT Token
// @access Public
router.post("/login", (req, res) => {
  const { errors, isValid } = ValidateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        errors.email = "Email not found!";
        res.status(400).json(errors);
      } else {
        bcrypt.compare(password, user.password).then(isMatch => {
          if (isMatch) {
            const payload = { id: user._id, name: user.firstname };
            const token = "Bearer " + jwt.sign(payload, keys.secretOrKey);
            res.json({ success: true, token });
          } else {
            errors.password = "Password incorrect";
            res.status(400).json({ errors });
          }
        });
      }
    })
    .catch(err => res.status(400).json(errors));
});

// @route /api/users/current
// @desc get current user
// @access PRIVATE
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
