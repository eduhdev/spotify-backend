const express = require("express");

const SongController = require("./controllers/SongController");
const PlaylistController = require("./controllers/PlaylistController");

const routes = new express.Router();

routes.get("/songs/:playlistId", SongController.fetchSongsByPlaylist);
routes.post("/songs", SongController.store);

routes.get("/playlists", PlaylistController.index);
routes.get("/playlist/:id", PlaylistController.getPlaylist);
routes.post("/playlists", PlaylistController.store);

module.exports = routes;
