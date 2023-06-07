const Post = require("../models/postModel");
const asyncHandler = require("express-async-handler");

// Display list of all posts

exports.post_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post list");
});

// //Display specific post
// exports.post_detail = asyncHandler(async(req, res, next)={
//     res.send(`NOT IMPLEMENTED: Post detail: ${req.params.id}`);
// });

//Handle Post create form GET
exports.post_create_get = asyncHandler(async (req, res, next) => {
  res.render("new-post-form", { user: res.locals.currentUser });
});

//Handle Post create
exports.post_create_post = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Post create POST");
});

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
