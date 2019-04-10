const User = require("../models/User");

//Handle user authorization
exports.login = (req, res) => {
  User.authenticate(req.body.email, req.body.password, (error, user) => {
    if (error || !user) {
      let err = new Error("Email or password is incorrect");
      err.status = 401;
      return err;
    }
    req.session.userId = user._id;
    return res;
  });
};

exports.signUp = async (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.phoneNumber) {
    let err = new Error("Email and password are required");
    err.status = 401;
    return err;
  }
  let user = {
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber
  };

  User.create(user, (error, user) => {
    if (error) {
      let err = new Error(error);
      err.status = 401;
      return err;
    }
    req.session.userId = user._id;
    return res;
  });
};
