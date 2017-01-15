const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  }
});

UserSchema.post("save", function(next) {
  var user = this;
  next();
})

UserSchema.pre("validate", function(next) {
  next();
})

module.exports = mongoose.model("user", UserSchema)
