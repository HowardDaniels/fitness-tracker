var db = require("../models");

module.exports = function(app) {
  app.get("/api/Exercise", function(req, res) {
    db.Exercise.find({}).then(function(dbExercises) {
      res.json(dbExercises);
    });
  });

  app.put("/api/Exercises/:id", function(req, res) {
    db.Exercise.updateOne(
      { _id: req.params.id },
      { rating: req.body.rating }
    ).then(function(dbExercise) {
      res.json(dbExercise);
    });
  });
};