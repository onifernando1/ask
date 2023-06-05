var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/sign-up-form", function (req, res, next) {
  res.render("sign-up-form");
});

module.exports = router;
