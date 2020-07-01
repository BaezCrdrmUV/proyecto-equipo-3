const Songs = require('../mongo/models/song.js')
const Artist = require('../mongo/models/artist.js')
const Album = require('../mongo/models/album.js')

const createSong = async(req, res) =>{
 
    try{
        const {title, number, album , artist, genre, year, urlStreaming, urlImage} = req.body;
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
        res.send({status: 'ok', message: 'Canción creada' });

    }catch(ERROR){
        console.log(ERROR);
        
        res.status(505).send({status: 'ERROR', message: 'cancion no creada' });
    }
}

const getSong = async (req, res) =>{
    try {
        const {songId} = req.body; 
        const song = await Songs.findById(songId);

        res.send ({status: 'ok', data: song});

    } catch (error) {  
        res.status(404).send({status: 'ERROR', message: 'Cancion no encontrada' });
    }

}


const createArtist = async(req, res) =>{
    try{
        const {artist, description, genre, debutyear, urlImage} = req.body;
        await Artist.create({
            artist,
            description, 
            genre, 
            debutyear, 
            urlImage
        })
        res.send({status: 'ok', message: 'Artista creado' });

    }catch(ERROR){
        console.log(ERROR);
        
        res.status(505).send({status: 'ERROR', message: 'Artista no creado' });
    }
}

const getArtist = async (req, res) =>{
    try {
        const {artistId} = req.body; 
        const artist = await Artist.findById(artistId);

        res.send ({status: 'ok', data: artist});

    } catch (error) {  
        res.status(404).send({status: 'ERROR', message: 'Artista no encontrado' });
    }

}

const createAlbum = async(req, res) =>{
 
    try{
        const {artist, releaseyear, urlImage} = req.body;
        await Album.create({
            artist, 
            releaseyear,
            urlImage
        })
        res.send({status: 'ok', message: 'Album creado' });

    }catch(ERROR){
        if (ERROR.name == 'ValidationError'){
            res.status(400).send({status: 'ERROR', message: 'Valores ingresados invalidos' });
        }else{
            console.log(ERROR);
        
            res.status(505).send({status: 'ERROR', message: 'Album no creado' });
        }
    }
}

const getAlbum = async (req, res) =>{
    try {
        const {albumId} = req.body; 
        const album = await Songs.findById(albumId);

        res.send ({status: 'ok', data: album});

    } catch (error) {  
        res.status(404).send({status: 'ERROR', message: 'Album no encontrado' });
    }

}



module.exports = {createSong, getSong, createArtist, getArtist, createAlbum, getAlbum};