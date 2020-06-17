import playlists from '../../example/playlist.json'

const defaultState = {
    playlists : playlists,
    currentPlaylist : []
} 

function reducer(state = defaultState, {type, payload}){
    switch(type){
        case 'getPlaylists': {
            return {
                ...state,
                playlists
            }
            
        }

        case 'getSelectedPlaylist':{
            return{
                ...state,
                currentPlaylist: playlists[payload]
            }
        }

        default:
            return state;
    }
}

export default reducer;