const express = require("express");
const router = express.Router();

// Get Model
const Categories = require("../../models/Categories");

router.get("/test", (req, res) => res.json({ msg: "categories work" }));

// @route /api/categories/create
// @desc Create Categories
// @access Private
router.post("/create", (req, res) => {
  const newCategories = new Categories({
    name: req.body.name
  });
  newCategories
    .save()
    .then(newCate => res.json(newCate))
    .catch(err => res.status(400).json(err));
});

// @route /api/categories/all
// @desc Get All Categories
// @access Public

router.get("/all", (req, res) => {
  Categories.find()
    .populate({
      path: "subChildren",
      populate: { path: "subChildren" }
    })
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
