const { usersService, authService, emailService } = require ('../services');
const { hashPasswords } = require ('../helpers')

module.exports = {
    createNewUser: async (req, res) => {
        const user = req.body;
        user.password = await hashPasswords (user.password);

        const newUser = await usersService.createNewUser (user);

        await emailService.sendMail (user.email, { userName: user.email });

        res.json (newUser);
    },
    getUser: async (req, res) => {
        console.log (req.body);
        res.json ('tokens finded');
    }
}
