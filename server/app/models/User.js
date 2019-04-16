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

module.exports = mongoose.model("User", UserScheme);
