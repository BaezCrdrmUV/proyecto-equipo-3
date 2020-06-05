const Songs = require('../mongo/models/song.js')

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
        res.status(505).send({status: 'ERROR', message: 'no se pudo' });
    }

}




module.exports = {createSong, getSong};