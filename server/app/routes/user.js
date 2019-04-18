const middleware = require("../../middleware");
module.exports = app => {
  const userController = require("../controllers/userController");

  //Create user
  app.post("/user", middleware.checkToken, userController.createUser);

  //Find all users
  app.get("/users", middleware.checkToken, userController.findAllUsers);

  //Find user by id
  app.get("/user/:userId", middleware.checkToken, userController.findUser);

  //Update
  app.put("/user/:userId", middleware.checkToken, userController.updateUser);

  //Delete
  app.delete("/user/:userId", middleware.checkToken, userController.deleteUser);
};
