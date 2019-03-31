const Product = require("../models/Product");

exports.create = (req, res) => {
  if (!req.body.name && !req.body.price) {
    return res.status(400).send({
      message: "Name and price are required"
    });
  }

  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    inStock: req.body.inStock,
    description: req.body.description
  });
  product
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(error => res.status(500).send(error));
};

exports.findAll = async (req, res) => {
  try {
    let all = await Product.find();
    res.send(all);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.findOne = async (req, res) => {
  try {
    let singleProduct = await Product.findById(req.params.productId);
    console.log(singleProduct);
    res.send(singleProduct);
  } catch (error) {
    res.status(500).send({
      message: "Product with provided id is not found"
    });
  }
};

exports.update = async (req, res) => {
  try {
    if (!req.body.name && !req.body.price) {
      return res.status(400).send({
        message: "Name and price are required"
      });
    }
    let updated = await Product.findByIdAndUpdate(
      req.params.productId,
      {
        name: req.body.name,
        price: req.body.price,
        inStock: req.body.inStock,
        description: req.body.description
      },
      {
        new: true
      }
    );
    res.send(updated);
  } catch (error) {
    res.status(500).send({
      message: "Product with provided id is not found"
    });
  }
};

exports.delete = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.productId);
    res.send({
      message: "Product is deleted"
    });
  } catch (error) {
    res.status(500).send({
      message: "Product with provided id is not found"
    });
  }
};
