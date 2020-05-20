const express = require('express');
const router = express.Router(); 
const path = require('path');
const fs = require('fs');
const uploadController = require('../controllers/upload-controller')

var multer = require('multer');

var optionsMulter = multer.diskStorage({
    destination: function(req, file, cb){
        var fileWithoutSpaceName = path.basename(file.originalname, '.mp3');
        var fileWithoutSpaceName = fileWithoutSpaceName.replace(/\s+/g, '');
        fs.mkdirSync(`${songDir}/${fileWithoutSpaceName}`)
        fs.mkdirSync(`${songDir}/${fileWithoutSpaceName}/originalSong`);
        cb(null, `${songDir}/${fileWithoutSpaceName}/originalSong`);
    },
    filename: function(req, file, cb){
        var fileWithoutSpaceName = file.originalname;
        var fileWithoutSpaceName = fileWithoutSpaceName.replace(/\s+/g, '');
        cb(null, fileWithoutSpaceName);
    }
});

var upload = multer({storage: optionsMulter});

router.post('/uploadsong', upload.single('mp3'), uploadController.uploadsong);

module.exports = router;