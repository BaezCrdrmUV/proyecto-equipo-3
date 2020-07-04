const defaultState = {
    toRender : "",
    id : null
}


function reducer(state = defaultState, {type, payload}){
    switch(type){
        case 'renderPlaylists': {
            return {
                ...state,
                toRender: state.toRender = "renderPlaylists",
                id : state.id = payload
            }
        }
        case 'renderAlbumLists':{
            return {
                ...state,
                toRender: state.toRender = "renderAlbumLists"
            }
        }

        case 'renderAlbumSongs':{
            return {
                ...state,
                toRender: state.toRender = "renderAlbumSongs",
                id: state.id = payload
            }
        }

        case 'renderGenres' : {
            return {
                ...state,
                toRender: state.toRender = "renderGenres"
            }
        }

        default:
            return state;
    }
}

export default reducer;