
const defaultState = {
    listSongs :[]

}


function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case 'getSongs': {

 
            return {
                ...state,
                listSongs : state.listSongs = payload
            }
        }


        default:
            return state;
    }
}

export default reducer;