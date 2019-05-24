const express = require("express");
const router = express.Router();

// load models
const Genre = require("../../models/Genre");

router.get("/test", (req, res) => res.json({ msg: "Genre Test" }));

// @route api/genre/create
// @desc Create Genre
// @access Private
router.post("/create", (req, res) => {
  const newGenre = new Genre({
    groups: req.body.groups,
    name: req.body.name
  });

  newGenre.save().then(genre => res.json(genre));
});

// @route GET api/genre/:id_groups
// @desc Get genre with id groups
// @access public
router.get("/groups/:idGroup", (req, res) => {
  Genre.find({ groups: req.params.idGroup })
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
