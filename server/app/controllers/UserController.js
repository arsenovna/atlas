const User = require("../models/User");

exports.createUser = (req, res) => {
  if (!req.body.email && !req.body.phoneNumber && !req.body.password) {
    return res.status(400).send({
      message: "Email, password and phone number are required"
    });
  }

  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    dob: req.body.dob,
    role: req.body.role,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password,
    salary: req.body.salary,
    gender: req.body.gender,
    startDate: req.body.startDate
  });
  user
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(error => res.status(500).send(error));
};

exports.findAllUsers = async (req, res) => {
  try {
    let all = await User.find();
    res.json({
      success: true,
      users: all,
    });
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
};

exports.findUser = async (req, res) => {
  try {
    let singleUser = await User.findById(req.params.userId);
    res.send(singleUser);
  } catch (error) {
    res.status(500).send({
      message: "User with provided id is not found"
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    if (!req.body.email && !req.body.phoneNumber && !req.body.password) {
      return res.status(400).send({
        message: "Email, password and phone number are required"
      });
    }

    let updated = await User.findByIdAndUpdate(
      req.params.userId,
      {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        dob: req.body.dob,
        role: req.body.role,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        salary: req.body.salary,
        gender: req.body.gender,
        startDate: req.body.startDate
      },
      {
        new: true
      }
    );
    res.send(updated);
  } catch (error) {
    res.status(500).send({
      message: "User with provided id is not found"
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.params.userId,
      {
        deleted: true
      },
      {
        new: true
      }
    );
    res.send({
      message: "User is deleted"
    });
  } catch (error) {
    res.status(500).send({
      message: "User with provided id is not found"
    });
  }
};

// let filters = {
//     age: [17, 30],
//     lasName: 'Erdogan',
//     firstName: '',
//     role: ['Front-end dev', 'Dev-ops'],
//     gender: 'F',
//   }

// User.find({
//     age: { $gt: req.body.age[0], $lt: req.body.age[1] },
//     lasName: req.body.lasName,
//     firstName: req.body.firstName,
//     role: { $in: req.body.role },
//     gender: req.body.gender
//   })
