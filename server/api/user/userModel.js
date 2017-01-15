const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  }
});

UserSchema.post("save", function() {
  var user = this;
})

UserSchema.pre("validate", function(next) {
  next();
})

module.exports = mongoose.model("user", UserSchema)
