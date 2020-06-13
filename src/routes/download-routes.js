const express = require('express');
const router = express.Router(); 
const downloadController = require('../controllers/download-controller')


router.get('/getSongDownload', downloadController.downloadSong);

module.exports = router;