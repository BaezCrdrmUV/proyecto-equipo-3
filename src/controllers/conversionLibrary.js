var path = require('path');
const ffmpeg = require('fluent-ffmpeg')
var fs = require('fs');
const Songs = require('../mongo/models/song.js')



const resizeDiferentAudio = async(song) =>{
    var songOnlyName = eliminateEmptySpaces(song);
    makeDirectory(songDir + '/' + songOnlyName);
    console.log(path.join(songDir, songOnlyName + '.m3u8'));
    fs.writeFile(path.join(songDir, songOnlyName,  songOnlyName + '.m3u8'),'#EXTM3U \n' +
    '#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="audio",AUTOSELECT=YES, NAME=' + songOnlyName + '\n' +
    '#EXT-X-STREAM-INF:BANDWIDTH=700000 \n' +
    '128/128.m3u8 \n' +
    '#EXT-X-STREAM-INF: BANDWIDTH=1000000\n' +
    '160/160.m3u8 \n' +
    '#EXT-X-STREAM-INF: BANDWIDTH=1200000\n' +
    '192/192.m3u8 \n' +
    '#EXT-X-STREAM-INF:BANDWIDTH=1500000 \n' +
    '320/320.m3u8 \n', function(err){
        if (err){
            console.log('File not created');
        }
    });
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
function eliminateEmptySpacesImage(imageName){
    imageName = path.basename(imageName, '.jpg');
    imageName = imageName.replace(/\s+/g, '');
    return imageName;
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
 
    const {title} = req.body;
    const filename = songName;
    const status = 'Waiting'
    await Songs.create({
        title,
        filename,
        status
    });
}


module.exports = {makeDirectory, resizeDiferentAudio, eliminateEmptySpaces, eliminateEmptySpacesImage, createSong}