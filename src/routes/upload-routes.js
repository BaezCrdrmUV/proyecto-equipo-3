const express = require('express');
const router = express.Router(); 
const conversion = require('../controllers/conversionLibrary')
const uploadController = require('../controllers/upload-controller')
const path = require('path');

var multer = require('multer');

var optionsMulter = multer.diskStorage({
    destination: function(req, file, cb){
        var fileWithoutSpaceName = conversion.eliminateEmptySpaces(file.originalname)
        conversion.makeDirectory(`${songDir}/${fileWithoutSpaceName}`)
        conversion.makeDirectory(`${songDir}/${fileWithoutSpaceName}/originalSong`);
        console.log(`${songDir}/${fileWithoutSpaceName}/originalSong`);
        cb(null, `${songDir}/${fileWithoutSpaceName}/originalSong`);
    },
    filename: function(req, file, cb){
        var fileWithoutSpaceName = file.originalname.replace(/\s+/g, '');
        cb(null, fileWithoutSpaceName);
    }
});
var optionsMulterImages = multer.diskStorage({
    destination: function(req, file, cb){
        var fileWithoutSpaceName = conversion.eliminateEmptySpacesImage(file.originalname)
        conversion.makeDirectory(`${imageDir}/${fileWithoutSpaceName}`)
        console.log(`${imageDir}/${fileWithoutSpaceName}`);
        cb(null, `${imageDir}/${fileWithoutSpaceName}`);
    },
    filename: function(req, file, cb){
        var fileWithoutSpaceName = file.originalname.replace(/\s+/g, '');
        cb(null, fileWithoutSpaceName);
    }
});

var uploadSong = multer({storage: optionsMulter});
var uploadImage = multer({storage: optionsMulterImages});

router.post('/uploadsong', uploadSong.single('mp3'), uploadController.uploadsong);
router.post('/uploadImage', uploadImage.single('jpg'), uploadController.uploadimage);

module.exports = router;