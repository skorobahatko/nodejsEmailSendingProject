const {usersService} = require('../../services')

module.exports = async (req, res, next) => {
    const user = req.body;
    const findedUser = await usersService.findByParams(user);

    if (!findedUser) {
        res.json('user is not finded');
    }
    req.user = findedUser;
    next()
};
