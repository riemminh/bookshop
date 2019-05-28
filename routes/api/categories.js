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
    name: req.body.name,
    level: req.body.level,
    parentID: req.body.parentID || 0
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
    .then(data => {
      const createDataTree = dataset => {
        let hashTable = Object.create(null);
        dataset.forEach(
          aData => (hashTable[aData._id] = { ...aData._doc, childNodes: [] })
        );
        let dataTree = [];
        dataset.forEach(aData => {
          if (aData.parentID) {
            hashTable[aData.parentID].childNodes.push(hashTable[aData._id]);
          } else {
            dataTree.push(hashTable[aData._id]);
          }
        });

        return dataTree;
      };
      const demo = createDataTree(data);
      res.json(demo);
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;
