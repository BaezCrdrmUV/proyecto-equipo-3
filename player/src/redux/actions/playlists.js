const getPlaylists = (id) => {
    return {
        type: 'getPlaylists',
        id
    };
};

const getSelectedPlaylist = (id) =>{
    return {
        type: 'getSelectedPlaylist',
        payload :id
    }
}


export { getPlaylists, getSelectedPlaylist};