const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useFindAndModify: false
});

// require routes
app.use(require("./routes/apiroutes"))
app.use(require("./routes/htmlroutes"))

require('dotenv').config()

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
