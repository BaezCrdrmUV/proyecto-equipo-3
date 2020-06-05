var path = require('path');
const ffmpeg = require('fluent-ffmpeg')
var fs = require('fs');
const Songs = require('../mongo/models/song.js')



const resizeDiferentAudio = async(song) =>{
    var songOnlyName = eliminateEmptySpaces(song);
    makeDirectory(songDir + '/' + songOnlyName);
    resizeAudio(songOnlyName, 128);
    resizeAudio(songOnlyName, 160);
    resizeAudio(songOnlyName, 192);
    resizeAudio(songOnlyName, 320);
    return new Promise(function(resolve, reject) {
        resolve(1)
    })
}

function makeDirectory(directory){
    if (!fs.existsSync(directory)){
        fs.mkdirSync(directory);
        console.log('Directory Created');
    }else{
        console.log('Directory already exists')
    }
}

function eliminateEmptySpaces(songName){
    songName = path.basename(songName, '.mp3');
    songName = songName.replace(/\s+/g, '');
    return songName;
}

function resizeAudio(song, bitrate) {
    const name = song;
    makeDirectory(`${songDir}/${name}/${bitrate}`);
    const command = ffmpeg(`${songDir}/${name}/originalSong/${song}.mp3`)
    .audioCodec('libmp3lame')
    .audioBitrate(bitrate)
    .outputOptions([
        '-hls_time 10',
        '-segment_time 10',
        '-segment_format mpegts',
        '-hls_playlist_type vod',
        '-hls_segment_filename ' + `${songDir}/${name}/${bitrate}/${bitrate}%03d.ts`,
        '-segment_list ' + `${songDir}/${name}/${bitrate}/${bitrate}.m3u8`
    ])
    .output(`${songDir}/${name}/${bitrate}/${bitrate}.m3u8`)
    .on('progress', function(progress) {
        console.log('Processing: ' + progress.percent + '% done')
    })
    .on('end', function(err, stdout, stderr) {
        console.log('Finished processing!' /*, err, stdout, stderr*/)
    })
    .run() 
}

const createSong = async(req, songName) =>{
 
    const {title, number, album , artist, genre, year} = req.body;
    const filename = songName;
    const status = 'Waiting'
    await Songs.create({
        title,
        number,
        album,
        artist, 
        genre,
        year,
        filename,
        status
    });
}



module.exports = {makeDirectory, resizeDiferentAudio, eliminateEmptySpaces, createSong}