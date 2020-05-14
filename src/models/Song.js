const { Schema, model } = require("mongoose");

const SongSchema = new Schema({
  title: String,
  author: String,
  album: String,
  file: String,
  image: String,
  thumbnail: String,
  playlistId: {
    type: Schema.Types.ObjectId,
    ref: "Playlist",
  },
});

module.exports = model("Song", SongSchema);
