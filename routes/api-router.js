const {Router} = require('express');
const authRouter = require('./auth-router');
const usersRouter = require('./users-router');
const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', usersRouter);

module.exports = apiRouter;
