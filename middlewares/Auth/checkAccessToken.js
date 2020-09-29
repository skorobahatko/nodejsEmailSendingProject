const jwt = require ('jsonwebtoken');
const { authService } = require ('../../services');
const { config } = require ('../../configs');

module.exports = async (req, res, next) => {
    try {
        const token = req.get ('Authorization');
        console.log ('middleware');
        if (!token) {
            return next ('error')
        }

        await jwt.verify (token, config.ACCESS_TOKEN_SECRET, err => {
            if (err) {
                return next(console.log (err));
            }
        });

        let tokenWithUser = await authService.getByParams ({ access_token: token });

        req.user = tokenWithUser;

        next ();
    } catch (e) {
        res.json(e);
    }
};
