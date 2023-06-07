var express = require("express");
var router = express.Router();
const User = require("../models/userModel");
const Post = require("../models/postModel");
const mongoose = require("mongoose");
const post_controller = require("../controllers/postController");

// router.get("/new", function (req, res, next) {
//   res.render("new-post-form", { user: res.locals.currentUser });
// });

router.get("/new", post_controller.post_create_get);

router.post("/new", post_controller.post_create_post);

module.exports = router;
