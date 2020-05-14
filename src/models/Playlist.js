const mongoose = require("mongoose");

const PlaylistSchema = new mongoose.Schema({
  title: String,
  description: String,
  thumbnail: String,
});

module.exports = mongoose.model("Playlist", PlaylistSchema);
