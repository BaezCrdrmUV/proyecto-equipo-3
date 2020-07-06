import listSongsExample from '../../example/song.json'

const getSongs = (songs) => {

    return {
        type : "getSongs",
        payload : songs
    };
};

const currentSong = (song) => {
    return{
        type: "currentSong",
        payload: song
    }

}




function getSong(songs){

    const listSongsResult = listSongsExample
    return listSongsResult;
}

export {getSongs, currentSong };