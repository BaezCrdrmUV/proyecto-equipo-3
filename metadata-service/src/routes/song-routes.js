const express = require('express');
const router = express.Router();
const songController = require('../controllers/song-controller.js');

router.post('/songs/createSong', songController.createSong);



module.exports = router;