const {Router} = require('express');
const authRouter = Router();
const {authController} = require('../controllers');
const {user} = require('../middlewares');

authRouter.post('/login', user.findUserInDB, authController.login);

module.exports = authRouter;
