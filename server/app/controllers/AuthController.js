const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config/session.config");

//Controller handles login authorization
exports.login = async (req, res) => {
  console.log("request", await req.body);
  console.log("req", await req);
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return new Error("Email is not found");
    let isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) return new Error("Incorrect password");
    let token = jwt.sign({ username: user.email }, config.secret, {
      expiresIn: "24h"
    });
    // return the JWT token for the future API calls

    res.json({
      success: true,
      currentUser: {
        email: user.email
      },
      message: "Authentication successful!",
      token: token
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

//Controller handles signup authorization
exports.signUp = async (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.phoneNumber) {
    return res.status(400).send({
      message: "Email and password are required"
    });
  }

  const user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    phoneNumber: req.body.phoneNumber
  });
  user
    .save()
    .then(data => {
      let token = jwt.sign({ username: user.email }, config.secret, {
        expiresIn: "24h"
      });
      // return the JWT token for the future API calls
      res.json({
        success: true,
        currentUser: user.email,
        message: "Authentication successful!",
        token: token
      });
    })
    .catch(error => res.status(500).send(error));
};
