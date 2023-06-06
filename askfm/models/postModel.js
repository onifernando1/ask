const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const postSchema = new Schema({
  information: String,
});

module.exports = Post;
