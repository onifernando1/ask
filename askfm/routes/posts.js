var express = require("express");
var router = express.Router();
const User = require("../models/userModel");

router.get("/new", function (req, res, next) {
  res.render("index");
});

module.exports = router;
