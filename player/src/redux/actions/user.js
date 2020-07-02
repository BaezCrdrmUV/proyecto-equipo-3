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


async function doRegister(username, password, email) {
    var salt = await bcrypt.genSaltSync(10);

    const hash = await bcrypt.hash(password, salt);
    console.log(hash);
    const settings = {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),

        body: JSON.stringify({
            'username': username,
            'password': hash,
            'email' : email
        })
    }

    try {
        const response = await fetch('http://localhost:9000/create', settings);
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
        const response = await fetch('http://localhost:9000/login', settings);
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.log(error);
    }
}

export {userLogin, createUser, updateLoginStatus}