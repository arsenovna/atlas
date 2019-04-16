module.exports.initRoutes = app => {
  require("./authentication")(app);
  require("./product")(app);
};
