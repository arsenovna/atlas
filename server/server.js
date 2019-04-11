const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const dbConfig = require("./config/database.conf");
const uuid = require("uuid/v4");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

const app = express();

//Parse requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3000;

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
// const randomId = uuid(); //generates random id
// app.use(
//   session({
//     secretKey: "Bearer",
//     resave: false,
//     saveUninitialized: true,
//     generateId: () => randomId,
//     store: new FileStore()
//   })
// );
app.get("/", (req, res) => res.json({ message: "Welcome!" }));
app.get("/login", (req, res) => res.json({ message: "Login is requested" }));
require("./app/routes/product")(app);
require("./app/routes/authentication")(app);
app.listen(port, () => console.log(`Server is running on port: ${port}`));
