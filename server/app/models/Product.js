const mongoose = require("mongoose");
const ProductScheme = mongoose.Schema(
  {
    name: String,
    price: Number,
    inStock: Boolean,
    description: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Product", ProductScheme);
