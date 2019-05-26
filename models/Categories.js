const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  subChildren: [
    {
      type: Schema.Types.ObjectId,
      ref: "topic"
    }
  ]
});

module.exports = Categories = mongoose.model("categories", CategoriesSchema);
