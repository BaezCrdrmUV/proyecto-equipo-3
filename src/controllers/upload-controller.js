var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');


const uploadsong = async(req, res) =>{
    console.log('pasaporaqui');
    var nombre = req.file.originalname;
    var archivoCanciones = path.join(songDir, 'songs.json');
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