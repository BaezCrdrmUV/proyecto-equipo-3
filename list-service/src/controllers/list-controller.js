const List = require('../mongo/models/list.js');

const createList = async (req, res) =>{

    try {
        const { user, name } = req.body;
        if (List.exists({ user: user, name: name })) {
            res.status(409).send({ status: '', message: 'La lista de reproduccion ya existe' });
        } else {
            await List.create({
                user,
                name
            })
            res.send({ status: 'ok', message: 'Lista creada' });
        }

    } catch (ERROR) {
        if (ERROR.name == 'ValidationError') {
            res.status(400).send({ status: 'ERROR', message: 'Valores ingresados invalidos' });
        } else {
            console.log(ERROR);

            res.status(505).send({ status: 'ERROR', message: 'Cancion no creada' });
        }
    }
};

const addSongList = async (req, res) =>{

};

const removeSongList = async (req, res) =>{

};

const deleteList = async (req, res) =>{

};

const getLists = async (req, res) =>{

};

module.exports = {createList, addSongList, removeSongList, deleteList, getLists};