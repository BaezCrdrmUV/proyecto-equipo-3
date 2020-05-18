const bcrypt = require('bcrypt');
const Users = require('../mongo/models/users');


const login = async(req, res) => {

        res.send({status:'ok', data: {}});   
}

module.exports = {login};