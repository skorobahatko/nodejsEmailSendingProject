const {comparePasswords, tokinazer} = require('../helpers');
const {authService} = require('../services');

module.exports =  {
    login: async (req, res, next) => {
        try {
            const user = req.user;
            const { password } = req.body;
            console.log (user)

            await comparePasswords(password, user.password);

            const tokens = tokinazer();
            console.log (tokens);

            await authService.addingTokensToDB(tokens);

            res.json(tokens);
        } catch (e) {
            next(e)
        }
    }

}
