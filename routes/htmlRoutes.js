var path = require("path");

module.exports = function(app) {
    app.post("../public/home.html", ({ body }, res) => {
    Exercise.create(body)
    .then(dbExercise => {
      // res.json(dbExercise);
    })
    .catch(err => {
      res.json(err);
    });
});
  
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};