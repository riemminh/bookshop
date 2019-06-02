const express = require("express");
const router = express.Router();

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
    return res.json(errors);
  }
  const newUser = {};
});

module.exports = router;
