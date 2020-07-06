const getAlbums = (albums) => {
    return {
        type: 'getAlbums',
        payload : albums
    };
};

const getSelectedAlbum = (id) =>{
    return {
        type: 'getSelectedAlbum',
        payload :id
    }
}


export { getAlbums, getSelectedAlbum};