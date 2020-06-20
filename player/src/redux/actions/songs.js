import listSongsExample from '../../example/song.json'

const getSongs = (songs) => {

    return {
        type : "getSongs",
        payload : getSong(songs)
    };
};


function getSong(songs){

    const listSongsResult = listSongsExample

    console.log(listSongsExample[songs[1]]);



    return listSongsResult;
}

export {getSongs};