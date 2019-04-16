const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const dbConfig = require("./config/database.conf");
const router = require("./app/routes/allRoutes");
const cors = require("cors");

const app = express();

//Parse requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = 3000;

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.url, { useNewUrlParser: true })
  .then(() => console.log("Successfuly connected"))
  .catch("Failed to connect", error => {
    console.log(error);
    process.exit();
  });

console.log("Connected to database");
router.initRoutes(app);
app.listen(port, () => console.log(`Server is running on port: ${port}`));
