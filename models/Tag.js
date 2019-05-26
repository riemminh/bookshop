const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "topic"
  },
  subChildren: [
    {
      type: Schema.Types.ObjectId,
      ref: "product"
    }
  ]
});

module.exports = Tag = mongoose.model("tag", TagSchema);
