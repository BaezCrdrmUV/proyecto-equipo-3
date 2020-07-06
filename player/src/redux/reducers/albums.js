

const defaultState = {
    albums : "",
    selectedAlbum : ""
}

function reducer (state = defaultState, {type, payload}){
    switch (type) {

        case 'getAlbums': {
            return {
                ...state,
                albums: state.albums = payload
            }
            
        }

        case 'getSelectedAlbum':{
            return{
                ...state,
                selectedAlbum: state.selectedAlbum = payload

            }
        }

    default:
        return state
    }
}

export default reducer;
