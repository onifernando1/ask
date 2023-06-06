var express = require("express");
var router = express.Router();
const User = require("../models/userModel");

router.get("/new", function (req, res, next) {
  res.render("new-post-form", { user: res.locals.currentUser });
});

module.exports = router;
