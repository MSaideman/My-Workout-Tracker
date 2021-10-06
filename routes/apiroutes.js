const db = require("../models");

module.exports = function(app) {
    app.get("", (req,res) => {
        db.Workout.find()
    })
    app.post("", (req,res) => {
        db.Workout.find()
    })
    app.put("", (req,res) => {
        db.Workout.find()
    })
}