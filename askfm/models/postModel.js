const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const postSchema = new Schema({
  information: String,
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = Post;
