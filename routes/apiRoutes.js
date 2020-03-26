var Exercise = require("../models/Exercise.js");

module.exports = function(app) {
//   app.post("/newExercise", ({ body }, res) => {
//     Exercise.create(body)
//     .then(dbExercise => {
//       // res.json(dbExercise);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });
  
  app.get("/api/Exercise", function(req, res) {
    Exercise.find({}).then(function(dbExercises) {
      res.json(dbExercises);
    });
  });

  app.put("/api/Exercises/:id", function(req, res) {
    Exercise.methodName(
      { _id: req.params.id },
      { rating: req.body.rating }
    ).then(function(dbExercise) {
      res.json(dbExercise);
    });
  });
};