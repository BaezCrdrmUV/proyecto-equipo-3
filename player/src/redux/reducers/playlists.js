import playlists from '../../example/playlist.json'

const defaultState = playlists;

function reducer(state = defaultState, {type, payload}){
    switch(type){
        case 'getPlaylists': {
            return state
            
        }

        default:
            return state;
    }
}

export default reducer;