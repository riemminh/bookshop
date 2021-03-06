const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    reuired: true
  },
  lastname: {
    type: String,
    reuired: true
  },
  firstname: {
    type: String,
    reuired: true
  },
  birthday: {
    type: Date,
    required: true
  },
  sex: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("user", UserSchema);
