const renderPlaylists = (id) => {
    return {
        type: 'renderPlaylists',
        payload : id
    };
};

const renderAlbumSongs = (id) => {
    return {
        type : 'renderAlbumSongs',
        payload : id
    }
}

const renderAlbumLists = (id) =>{
    return {
        type: 'renderAlbumLists',
        payload : id
    };
};

const renderGenres = () => {
    return{
        type: 'renderGenres'
    }
}


const renderGenreSongs = (genre) => {
    return {
        type: 'renderGenreSongs',
        payload: genre 
    }
}

export  {renderAlbumLists, renderPlaylists, renderAlbumSongs, renderGenres, renderGenreSongs}