var express = require("express");
var router = express.Router();
const User = require("../models/userModel");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { user: req.user });
});

module.exports = router;
