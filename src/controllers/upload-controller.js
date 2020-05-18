var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var multer = require('multer');

var optionsMulter = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, 'songs'));
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});

var upload = multer({storage: optionsMulter});


const uploadsong = async(req, res) =>{
    var nombre = req.file.originalname;
    var archivoCanciones = path.join(__dirname, 'songs.json');
    fs.readFile(archivoCanciones, 'utf8', function(err, archivo) {
        if (err) throw err;
        var songs = JSON.parse(archivo);
        songs.push({
            nombre: nombre,
            nombrearchivo: nombre
        });
        fs.writeFile(archivoCanciones, JSON.stringify(songs), function(err) {
            if (err) throw err;
            res.send({status: 'ok' , message: 'Cancion agregada'})
        });
    });
};

module.exports = {uploadsong};