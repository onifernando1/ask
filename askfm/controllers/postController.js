const Post = require("../models/postModel");
const asyncHandler = require("express-async-handler");

// Display list of all posts

exports.post_list = asyncHandler(async (req, res, next) => {
  const allPosts = await Post.find({}).populate("author");
  if (res.locals.currentUser) {
    res.render("posts-list", {
      allPosts: allPosts,
      user: res.locals.currentUser,
    });
  }
  res.redirect("/users/log-in");
});

// //Display specific post
// exports.post_detail = asyncHandler(async(req, res, next)={
//     res.render("showpost")
// });

//Handle Post create form GET
exports.post_create_get = asyncHandler(async (req, res, next) => {
  res.render("new-post-form", { user: res.locals.currentUser });
});

//Handle Post create
exports.post_create_post = async function (req, res, next) {
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
};

//Handle Post delete form
exports.post_delete_get = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Post delete GET");
});

//Handle Post delete
exports.post_delete_post = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Post delete POST");
});

//Handle Post update form GET
exports.post_update_get = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Post update GET");
});

//Handle post update POST
exports.post_update_post = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Post update POST");
});
