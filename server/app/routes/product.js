module.exports = app => {
  const productController = require("../controllers/ProductController");

  //Create product
  app.post("/product", productController.create);

  //Find all products
  app.get("/products", productController.findAll);

  //Find product by id
  app.get("/product/:productId", productController.findOne);

  //Update
  app.put("/product/:productId", productController.update);

  //Delete
  app.delete("/product/:productId", productController.delete);
};
