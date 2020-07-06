const defaultState = {
    loginInfo : {
        username: "",
        password: "",
    },

    error:{
        username:"",
        password: ""
    },

    currentUser : "" ,
    token: "",
    loginStatus: "",

    registerStatus: "" 

}

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case'userLogin': {
            return{
                ...state,
                loginStatus : state.loginStatus = payload
            }
            
        }

        case 'userRegister':{
            return{
                ...state,
                registerStatus: state.registerStatus = payload
            }
        }

        case 'updateLoginStatus': {
            return{
                ...state,
                loginStatus : state.loginStatus = payload
            }
        }

        case 'updateUsername':{
            return{
                ...state,
                currentUser : state.currentUser = payload
            }
        }

        case 'updateToken':{
            return{
                ...state,
                token : state.token = payload
            }
        }

        default:
            return state;
    }
}

export default reducer;