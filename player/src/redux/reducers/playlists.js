import Userplaylists from '../../example/playlist.json'

const defaultState = {
    playlists : Userplaylists,
    selectedPlaylist : [],
    currentPlaylist : []
} 

function reducer(state = defaultState, {type, payload}){
    switch(type){
        case 'getPlaylists': {
            return {
                ...state,
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