const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  MM: String,
  DD: String,
  YYYY: String,
  HH: String,
  Min: String,
  Type: String,
  DistanceUnits: String,
  Distance: Number,
  Hours: Number,
  Minutes: Number,
  Seconds: Number
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;