const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserScheme = mongoose.Schema(
  {
    firstName: {
      type: String,
      unique: false,
      required: false,
      trim: false
    },
    lastName: {
      type: String,
      unique: false,
      required: false,
      trim: false
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
      unique: false,
      required: true,
      trim: true
    },
    address: String,
    dob: Date,
    role: String,
    salary: Number,
    gender: String,
    startDate: Date,
    deleted: Boolean
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", UserScheme);
