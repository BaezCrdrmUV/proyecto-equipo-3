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
                id : payload
            }
        }
        case 'renderAlbumLists':{
            return {
                ...state,
                toRender: state.toRender = "renderAlbumLists"
            }
        }

        default:
            return state;
    }
}

export default reducer;