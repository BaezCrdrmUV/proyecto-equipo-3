const getAlbums = () => {
    return {
        type: 'getAlbums',
        
    };
};

const getSelectedAlbum = (id) =>{
    return {
        type: 'getSelectedAlbum',
        payload :id
    }
}


export { getAlbums, getSelectedAlbum};