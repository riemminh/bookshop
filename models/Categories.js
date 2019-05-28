const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  level: {
    type: String
  },
  parentID: {
    type: Schema.Types.ObjectId,
    ref: "categories"
  }
});

module.exports = Categories = mongoose.model("categories", CategoriesSchema);
