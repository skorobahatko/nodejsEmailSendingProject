const jwt = require('jsonwebtoken');
const {config} = require('../configs')

module.exports = () => {
    console.log (config.ACCESS_TOKEN_SECRET + '     secret tokinizer');
    const access_token = jwt.sign({}, config.ACCESS_TOKEN_SECRET, {expiresIn: '2m'});
    const refresh_token = jwt.sign({}, config.REFRESH_TOKEN_SECRET, {expiresIn: '30m'});

    return {
        access_token,
        refresh_token
    }
};
