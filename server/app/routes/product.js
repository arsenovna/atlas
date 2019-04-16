const middleware = require("../../middleware");
module.exports = app => {
  const productController = require("../controllers/ProductController");

  //Create product
  app.post("/product", middleware.checkToken, productController.create);

  //Find all products
  app.get("/products", middleware.checkToken, productController.findAll);

  //Find product by id
  app.get(
    "/product/:productId",
    middleware.checkToken,
    productController.findOne
  );

  //Update
  app.put(
    "/product/:productId",
    middleware.checkToken,
    productController.update
  );

  //Delete
  app.delete(
    "/product/:productId",
    middleware.checkToken,
    productController.delete
  );
};
