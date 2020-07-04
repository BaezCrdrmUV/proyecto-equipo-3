import allAlbums from '../../example/album.json'


const defaultState = {
    albums : allAlbums,
    selectedAlbum : ""
}

function reducer (state = defaultState, {type, payload}){
    switch (type) {

        case 'getAlbums': {
            return {
                ...state,
            }
            
        }

        case 'getSelectedAlbum':{
            return{
                ...state,
                selectedAlbum: state.selectedAlbum = state.albums[payload]

            }
        }

    default:
        return state
    }
}

export default reducer;
