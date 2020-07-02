const express = require('express');
const router = express.Router();
const userController = require('../controllers/users-controller.js');

router.post('/login' , userController.login);
router.post('/create' , userController.createUser);
router.post('/tokenAuthorization' , userController.tokenAuthorization);


module.exports = router;