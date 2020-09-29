const bcrypt = require ('bcrypt');

module.exports = async (password, hashedPassword) => {
    const isPasswordsEqual = await bcrypt.compare (password, hashedPassword)
    if (!isPasswordsEqual) {
        console.log ('error in compare pass');
        throw Error;
    }
    return isPasswordsEqual;
}
