
const router = require("express").Router();
const path = require("path");
const db = require("../models");

module.exports = function (app) {
  router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  router.post("/api/workouts/", ({body}, res) => {
    db.Workout.find({})
      .create(body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $push:{
        exercises: req.body,
        }
      }, {
        new:true
      }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};

module.exports = router;