const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserScheme = mongoose.Schema(
  {
    name: {
      type: String,
      unique: false, //email must be unique
      required: false, //email is required
      trim: false //remove whitespace
    },
    email: {
      type: String,
      unique: true, //email must be unique
      required: true, //email is required
      trim: true //remove whitespace
    },
    phoneNumber: {
      type: Number,
      required: true
    },
    password: {
      type: String,
      unique: false, //email must be unique
      required: true, //email is required
      trim: true //remove whitespace
    },
    address: String,
    dob: Date,
    role: String
  },
  {
    timestamps: true
  }
);

// Login
UserScheme.statics.authenticate = (email, pswd, callb) => {
  UserScheme.findOne({
    email: email
  }).exec((error, foundUser) => {
    if (error) return callb(error);
    if (!foundUser) {
      let err = new Error("User is not found");
      err.status = 404;
      return callb(err);
    }
    //pswd => password entered by user, password => password stored in db
    bcrypt.compare(pswd, foundUser.password, (error, result) => {
      if (result) return callb(null, foundUser);
      return callb(error);
    });
  });
};

// Registration
UserScheme.pre("save", next => {
  let user = this; // this => User
  bcrypt.hash(user.password, 8, (error, hash) => {
    if (error) return next(error);
    user.password = hash;
    next(); //continue after hashing
  });
});

module.exports = mongoose.model("User", UserScheme);
