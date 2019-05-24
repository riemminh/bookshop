const express = require("express");
const router = express.Router();

// load models
const Groups = require("../../models/Groups");

router.get("/test", (req, res) => res.json({ msg: "groups test" }));

// @route POST api/groups/create
// @desc Create New Group
// @access Private

router.post("/create", (req, res) => {
  const newGroups = new Groups({
    name: req.body.name,
    category: req.body.category
  });
  newGroups.save().then(groups => res.json(groups));
});

// @route GET api/groups/category/:idCate
// @desc Get Groups with ID category
// @access public
router.get("/category/:idCate", (req, res) => {
  Groups.find({ category: req.params.idCate })
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
