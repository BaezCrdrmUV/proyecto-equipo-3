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

    loginStatus: "" 

}

function reducer(state = defaultState, { type, payload }) {
    console.log(payload)
    switch (type) {
        case'userLogin': {
            return{
                ...state,
                loginStatus : state.loginStatus = payload
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