var express = require("express");
const User = require("../models/userModel");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/sign-up", function (req, res, next) {
  res.render("sign-up-form");
});

router.post("/sign-up", async (req, res, next) => {
  try {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
    const result = await user.save();
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
});

router.get("/log-in", function (req, res, next) {
  res.render("log-in-form");
});
module.exports = router;
