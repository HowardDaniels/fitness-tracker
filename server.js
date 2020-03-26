const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Exercise = require("./models/Exercise")
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/exercisedb", { useNewUrlParser: true });

app.post("/submit", ({ body }, res) => {
    Exercise.create(body)
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.json(err);
    });
});

var apiRoutes = require("./routes/apiRoutes.js")(app)
var htmlRoutes = require("./routes/htmlRoutes.js")(app)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});