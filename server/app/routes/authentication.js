//router for signin and signup authorizations
module.exports = app => {
  const authController = require("../controllers/AuthController");

  //Login
  app.post("/login", authController.login);

  //Logout
  // app.get("/logout", authController.logout);

  //Sign up
  app.post("/signup", authController.signUp);
};
