import Userplaylists from '../../example/playlist.json'

const defaultState = {
    playlists : [],
    selectedPlaylist : [],
    currentPlaylist : []
} 

function reducer(state = defaultState, {type, payload}){
    switch(type){
        case 'getPlaylists': {
            return {
                ...state,
                playlists : state.playlists = payload
            }
            
        }

        case 'getSelectedPlaylist':{
            return{
                ...state,
                selectedPlaylist: state.selectedPlaylist = state.playlists[payload]
            }
        }

        default:
            return state;
    }
}

export default reducer;