const mongoose = require('mongoose');

let TodoSchema = new mongoose.Schema({
  completed: Boolean,
  content: {
    type: String,
    required: true
  }
});

//module.exports = mongoose.model("Todo", TodoSchema);

let DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  whenAdopted: Date || Date.now(),
  collar: Buffer,
  age: {
    type: String,
    min: 0,
    max: 100
  },
  toys: [String],
  location: {
    state: String,
    city: String,
    zip: Number
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "owner",
    required: true
  }
})

module.exports = mongoose.model("Dog", DogSchema);
