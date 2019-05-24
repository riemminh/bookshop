const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupsSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: "category"
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Groups = mongoose.model("groups", GroupsSchema);
