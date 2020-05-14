const Playlist = require("../models/Playlist");

module.exports = {
  async index(req, res) {
    const playlists = await Playlist.find();

    return res.json(playlists);
  },

  async getPlaylist(req, res) {
    const { id } = req.params;
    const playlist = await Playlist.findById(id);

    return res.json(playlist);
  },

  async store(req, res) {
    const { title, description, thumbnail } = req.body;

    const playlist = await Playlist.create({
      title,
      description,
      thumbnail,
    });

    return res.json(playlist);
  },
};
