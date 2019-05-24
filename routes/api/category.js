const express = require("express");
const router = express.Router();

// load model
const Category = require("../../models/Category");

router.get("/test", (req, res) => res.json({ msg: "test" }));

// @route POST api/category/create
// @desc Create Category
// @access Private
router.post("/create", (req, res) => {
  const newCategory = new Category({
    name: req.body.name
  });
  newCategory.save().then(category => res.json(category));
});

// @route GET api/category/all
// @desc Get All Category
// @access Public
router.get("/all", (req, res) => {
  Category.find()
    .then(category => res.json(category))
    .catch(err => res.status(404).json(err));
});
module.exports = router;
