const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  groups: {
    type: Schema.Types.ObjectId,
    ref: "groups"
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

module.exports = Genre = mongoose.model("genre", GenreSchema);
