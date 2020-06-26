const defaultState = {
    loginInfo : {
        username: "",
        password: "",
    },

    error:{
        username:"",
        password: ""
    },

    currentUser : {
        username: "",
        token: "",
    },

    loginStatus: false 

}

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case'userLogin': {
            return{
                ...state
            }
            
        }

        case 'userRegister':{
            return{
                ...state
            }
        }

        default:
            return state;
    }
}

export default reducer;