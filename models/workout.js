const mongoose = require("mongoose")
const Schema = mongoose.Schema;

// model info

// const Class = new Schema({
// day: {},
// exercises:[
// {type:},
// {name:},
// {duration:},
// {weight:},
// {reps:},
// {sets:},
// {distance:}
// ]
// })

const Workout = mongoose.model("workout", Class)
module.exports = Workout;