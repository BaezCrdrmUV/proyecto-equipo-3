// import playlist from "../../components/playlists/playlist";

const getPlaylists = (playlists) => {
    return {
        type: 'getPlaylists',
        payload : playlists
    };
};

const getSelectedPlaylist = (id) =>{
    return {
        type: 'getSelectedPlaylist',
        payload :id
    }
}


export { getPlaylists, getSelectedPlaylist};