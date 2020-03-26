const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  date: {
    type: String
  },

  time: {
    type: String
  },

  type: {
    type: String
  },

  distance:{
      type: Number
  },

  duration: {
      type: Number
  },

  ExerciseCreated: {
    type: Date,
    default: Date.now
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;