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


async function doRegister(username, password, email) {
    const hash = await bcrypt.hash(password, 15);
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
        const response = await fetch('http://localhost:4000/register', settings);
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.log(error);
    }

}


async function doLogin(user, password) {
    const hash =  await bcrypt.hash(password, 15);
    const settings = {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),

        body: JSON.stringify({
            'username': user,
            'password': hash
        })
    }

    try {
        const response = await fetch('http://localhost:4000/login', settings);
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.log(error);
    }
}

export {userLogin, createUser}