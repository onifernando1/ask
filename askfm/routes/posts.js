var express = require("express");
var router = express.Router();
const User = require("../models/userModel");
const Post = require("../models/postModel");
const mongoose = require("mongoose");

router.get("/new", function (req, res, next) {
  res.render("new-post-form", { user: res.locals.currentUser });
});

router.post("/new", async function (req, res, next) {
  try {
    const post = new Post({
      author: req.body.username,
      information: req.body.information,
    });

    await post.save();
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
