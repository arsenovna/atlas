const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const dbConfig = require("./config/database.conf");

const app = express();

//Parse requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3001;

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.url, { useNewUrlParser: true })
  .then(() => console.log("Successfuly connected"))
  .catch("Failed to connect", error => {
    console.log(error);
    process.exit();
  });

const db = mongoose.connection;

console.log("Connected to database");
app.get("/", (req, res) => res.json({ message: "Welcome!" }));
app.listen(port, () => console.log(`Server is running on port: ${port}`));
