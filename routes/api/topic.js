const express = require("express");
const router = express.Router();

// load Model
const Topic = require("../../models/Topic");
const Categories = require("../../models/Categories");

router.get("/test", (req, res) => res.json({ msg: "topics work" }));

// @route /api/topic/create
// @desc create topic
// @access PRIVATE
router.post("/create", (req, res) => {
  const newTopic = new Topic({
    name: req.body.name,
    parent: req.body.parent || null
  });

  newTopic
    .save()
    .then(topic => {
      if (topic.parent) {
        Categories.findById({ _id: topic.parent }).then(cate => {
          cate.subChildren.push(topic._id);
          cate
            .save()
            .then(() => res.json({ msg: "done" }))
            .catch(err => res.status(400).json({ msg: "bug" }));
        });
      } else {
        res.json(topic);
      }
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;
