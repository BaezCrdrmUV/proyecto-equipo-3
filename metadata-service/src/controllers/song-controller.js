const Songs = require('../mongo/models/song.js')
const Artist = require('../mongo/models/artist.js')
const Album = require('../mongo/models/album.js')

const createSong = async (req, res) => {

    try {
        const { title, number, album, artist, genre, year, urlStreaming, urlImage } = req.body;
        if (Songs.exists({ title: title })) {
            res.status(409).send({ status: 'Existente', message: 'La cancion ingresada ya existe' });
        } else {
            await Songs.create({
                title,
                number,
                album,
                artist,
                genre,
                year,
                urlStreaming,
                urlImage
            })
            res.send({ status: 'ok', message: 'Canción creada' });
        }

    } catch (ERROR) {
        if (ERROR.name == 'ValidationError') {
            res.status(400).send({ status: 'ERROR', message: 'Valores ingresados invalidos' });
        } else {
            console.log(ERROR);

            res.status(505).send({ status: 'ERROR', message: 'Cancion no creada' });
        }
    }
}

const getSong = async (req, res) => {
    try {
        const { songId } = req.body;
        const song = await Songs.findById(songId);
        if (song == null){
            res.status(404).send({ status: 'ERROR', message: 'Cancion no encontrada' });
        }else{
            res.send({ status: 'ok', data: song });
        }

    } catch (error) {
        res.status(404).send({ status: 'ERROR', message: 'Cancion no encontrada' });
    }

}


const createArtist = async (req, res) => {
    try {
        const { artist, description, genre, debutyear, urlImage } = req.body;
        if (Artist.exists({ artist: artist })) {
            res.status(409).send({ status: 'Existente', message: 'El artista ingresado ya existe' });
        } else {
            await Artist.create({
                artist,
                description,
                genre,
                debutyear,
                urlImage
            })
            res.send({ status: 'ok', message: 'Artista creado' });
        }
    } catch (ERROR) {
        if (ERROR.name == 'ValidationError') {
            res.status(400).send({ status: 'ERROR', message: 'Valores ingresados invalidos' });
        } else {
            console.log(ERROR);

            res.status(505).send({ status: 'ERROR', message: 'Artista no creado' });
        }
    }
}

const getArtist = async (req, res) => {
    try {
        const { artistId } = req.body;
        const artist = await Artist.findById(artistId);

        if (artist == null){
            res.status(404).send({ status: 'ERROR', message: 'Artista no encontrada' });
        }else{
            res.send({ status: 'ok', data: artist });
        }

    } catch (error) {
        res.status(404).send({ status: 'ERROR', message: 'Artista no encontrado' });
    }

}

const createAlbum = async (req, res) => {

    try {
        const { albumname, artist, releaseyear, urlImage } = req.body;
        if (Album.exists({ albumname: albumname })) {
            res.status(409).send({ status: 'Existente', message: 'El album ingresado ya existe' });
        } else {
            await Album.create({
                albumname,
                artist,
                releaseyear,
                urlImage
            })
            res.send({ status: 'ok', message: 'Album creado' });
        }

    } catch (ERROR) {
        if (ERROR.name == 'ValidationError') {
            res.status(400).send({ status: 'ERROR', message: 'Valores ingresados invalidos' });
        } else {
            console.log(ERROR);

            res.status(505).send({ status: 'ERROR', message: 'Album no creado' });
        }
        409
    }
}

const getAlbum = async (req, res) => {
    try {
        const { albumId } = req.body;
        const album = await Songs.findById(albumId);
        if (album == null){
            res.status(404).send({ status: 'ERROR', message: 'Album no encontrada' });
        }else{
            res.send({ status: 'ok', data: album });
        }

    } catch (error) {
        res.status(404).send({ status: 'ERROR', message: 'Album no encontrado' });
    }

}



module.exports = { createSong, getSong, createArtist, getArtist, createAlbum, getAlbum };