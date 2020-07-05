const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/list-controller.js');

router.post('/playlist/CreatePlaylist', playlistController.createList);
router.put('/playlist/AddSong', playlistController.addSongList);
router.put('/playlist/RemoveSong', playlistController.removeSongList);
router.delete('/playlist/Deletelist', playlistController.deleteList);
router.get('/playlist/GetPlaylist', playlistController.getLists);
router.get('/playlist/GetMyPlaylist', playlistController.getMyPlaylists);

module.exports = router;