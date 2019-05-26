const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "categories"
  },
  subChildren: [
    {
      type: Schema.Types.ObjectId,
      ref: "tag"
    }
  ]
});

module.exports = Topic = mongoose.model("topic", TopicSchema);
