
const defaultState = {
    listSongs :[],
    currentSong:{
        id : "",
        title: "",
        album: "",
        urlImage: "https://i.imgur.com/rEDaelS.png",
        urlStreaming:"",
        number : "",
        genre : "",
        year: "",
        duration: "",
        artist: ""
        
    }

}


function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case 'getSongs': {

 
            return {
                ...state,
                listSongs : state.listSongs = payload
            }
        }

        case 'currentSong':{

            return {
                ...state,
                currentSong : state.currentSong = payload
            }
        }


        default:
            return state;
    }
}

export default reducer;