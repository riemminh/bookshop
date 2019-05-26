const express = require("express");
const router = express.Router();

// load model
const Tag = require("../../models/Tag");
const Topic = require("../../models/Topic");

router.get("/test", (req, res) => res.json({ msg: "tags work" }));

// @route /api/tag/create
// @desc create tag
// @access Private

router.post("/create", (req, res) => {
  const newTag = new Tag({
    name: req.body.name,
    parent: req.body.parent || null
  });
  newTag.save().then(tag => {
    if (tag.parent) {
      Topic.findById({ _id: tag.parent }).then(topic => {
        topic.subChildren.push(tag._id);
        topic
          .save()
          .then(() => res.json({ msg: "done" }))
          .catch(() => res.status(404).json({ msg: "bug" }));
      });
    } else {
      res.json(tag);
    }
  });
});

module.exports = router;
