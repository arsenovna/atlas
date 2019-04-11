const User = require("../models/User");

//Controller handles login authorization
exports.login = async (req, res) => {
  await User.authenticate(req.body.email, req.body.password, (error, user) => {
    if (error || !user) {
      let err = new Error("Email or password is incorrect");
      err.status = 401;
      return err;
    }
    req.session.userId = user._id;
    return res;
  });
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
    password: req.body.password,
    phoneNumber: req.body.phoneNumber
  });
  user
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(error => res.status(500).send(error));
  console.log(req);
};
