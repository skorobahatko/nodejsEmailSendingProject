const {Router} = require('express');
const usersRouter = Router();
const {usersController} = require('../controllers');
const {auth}= require('../middlewares');

usersRouter.post('/create', usersController.createNewUser);
usersRouter.post('/get-user', auth.checkAccessToken ,usersController.getUser);

module.exports = usersRouter;
