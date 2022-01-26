const express = require('express');
const userController =  require('../controllers/user');
const router = express.Router();

router.get('/users', userController.getUsers);

router.post('/user', userController.postUser);

router.get('/user/:userId', userController.getUserById);

router.put('/user/:userId', userController.updateUserById);

router.delete('/user/:userId', userController.deleteUserById);

module.exports =  router;
