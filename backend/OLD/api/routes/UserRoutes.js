const express = require('express');
const router = express.Router();
//const controllers = require('../controllers'); //Usando Require
const {UserControllers} = require('../controllers'); //Usando destructer

//router.get('/', controllers.UserControllers.getUsers);
router.get('/', UserControllers.getUsers);

router.get('/:id', UserControllers.getOneUser);

router.post('/', UserControllers.createUser);

router.put('/:id', UserControllers.putUser);

router.patch('/:id', UserControllers.updateUser);

router.delete('/:id', UserControllers.deleteUser);

module.exports = router;