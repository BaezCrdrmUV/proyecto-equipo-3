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

export  {renderAlbumLists, renderPlaylists, renderAlbumSongs}