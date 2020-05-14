const Song = require("../models/Song");

module.exports = {
  async fetchSongsByPlaylist(req, res) {
    const { playlistId } = req.params;
    const songs = await Song.find({ playlistId });

    return res.json(songs);
  },

  async store(req, res) {
    const { title, author, album, file, thumbnail, playlistId } = req.body;

    const song = await Song.create({
      title,
      author,
      album,
      file,
      thumbnail,
      playlistId,
    });

    return res.json(song);
  },
};
