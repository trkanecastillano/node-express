const express = require("express");
const router = express.Router();

const userRoutes = require("./routes/user");
const organisationRoutes = require("./routes/organisation");

module.exports = (server) => {
  userRoutes(router);
  organisationRoutes(router);
  server.use(router);
};
