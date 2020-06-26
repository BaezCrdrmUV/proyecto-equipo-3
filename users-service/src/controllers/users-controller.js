const Users = require('../mongo/models/user.js');
const bcrypt = require('bcryptjs');

const login = async(req, res) => {
        try {      
                const {username, password} = req.body;
                const user = await Users.findOne({username});
                if(user){

                    // const isOk = (password === user.password);
                    const isOk = await bcrypt.compare(password, user.password);
                    console.log(password, user.password);
                    if(isOk){
                        res.send({status:'ok', data: {}});
                    }else{
                        res.status(403).send({status:'INVALID_PASSWORD', message: 'Contraseña incorrecta'});
                    }
                }else{
                    res.status(401).send({status:'USER_NOT_FOUND', message: 'usuario no encontrado'});
                }
            } catch (error) {
                console.log(error);
                res.status(500).send({status:'ERROR', message: 'error'});
            }

}


const createUser = async(req, res) =>{

        try{
            const {username, password, email} = req.body;
    
            // const hash =  await bcrypt.hash(password, 15);
    
    
            await Users.create({
                username,
                email,
                password
              //  password: hash,    
            })
    
            res.send({status: 'ok', message: 'usuario creado' });
    
    
        }catch(ERROR){
            console.log(ERROR);
    
            if(ERROR.code && ERROR.code == 11000){
                res
                    .status(400)
                    .send({status: 'DUPLICATED_VALUES', message: Error.keyValue});
                    return;
            }
            
            res.status(505).send({status: 'ERROR', message: 'usuario no creado' });
    
        }
    
    };

module.exports = {login, createUser};