const database = require ('../dataBase').getInstance ();

module.exports = {
    addingTokensToDB: (tokens) => {
        const oAuth = database.getModel ('oAuth');
        return oAuth.create (tokens, { new: true });
    },
    getByParams: (tokens) => {
        const oAuth = database.getModel('oAuth');
        return oAuth.findOne({
            where: tokens
        })
    }
}
