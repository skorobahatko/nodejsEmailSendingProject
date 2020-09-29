const database = require ('../dataBase').getInstance ();

module.exports = {
    createNewUser: (user) => {
        const User = database.getModel ('User');
        return User.create (user, { new: true });
    },
    findByParams: (user) => {
        const User = database.getModel('User');
        return User.findOne({
            where: {
                email: user.email
            }
        })
    }
};
