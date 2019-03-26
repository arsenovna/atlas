const mongoose = require("mongoose");

const express = require("express");

const app = express();

const port = 3001;

mongoose.connect("mongodb://localhost:27017/local");

const db = mongoose.connection;

//Catch error
db.on("error", console.log("Database connecting error"));

function startServer() {
  console.log("Connected to database");
  app.get(
    "/",
    (req, res) => res.sendFile(path.join(__dirname)),
    "../client/public/index.html"
  );
  app.listen(port, () => console.log(`Server is running on port: ${port}`));
}

db.once("open", startServer());
