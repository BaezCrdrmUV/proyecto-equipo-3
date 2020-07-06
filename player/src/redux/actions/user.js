const bcrypt = require('bcryptjs');


const userLogin =  (username, password) => {


    const result = doLogin(username, password);
    return {
        type: 'userLogin',
        payload : result
    };
};


const createUser = (username, password, email) => {
    const result = doRegister(username, password, email);
    return {
        type: 'userRegister',
        payload: result
    }
}

const updateLoginStatus = (status) => {
    return {
        type: 'updateLoginStatus',
        payload: status
    }
}

const updateUsername = (username) =>{
    return {
        type: 'updateUsername',
        payload: username
    }
}

const updateToken = (token) => {
    return {
        type : 'updateToken',
        payload: token
    }
}


async function doRegister(username, password, email) {
 
    const settings = {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),

        body: JSON.stringify({
            'username': username,
            'password': password,
            'email' : email
        })
    }

    try {
        const response = await fetch('http://localhost:80/create', settings);
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.log(error);
    }

}


async function doLogin(user, password) {

    const settings = {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),

        body: JSON.stringify({
            'username': user,
            'password': password
        })
    }
    try {
        const response = await fetch('http://localhost:80/login', settings);
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.log(error);
    }
}

export {userLogin, createUser, updateLoginStatus, updateUsername, updateToken}