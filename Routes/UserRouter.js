const express = require("express");
const { Register, Login } = require("../controller/UserController");
const Router = express.Router();

Router.route("/signup").post(Register);
Router.route("/login").post(Login);

module.exports = Router;