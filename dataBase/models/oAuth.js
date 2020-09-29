const { config } = require ('../../configs');

module.exports = (sequelize,DataTypes) => {
    const oAuth = sequelize.define ('oAuth', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        access_token: {
            type: DataTypes.STRING,
            allowNull: false
        },
        refresh_token: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'o_auth',
        timestamps: false
    });
    return oAuth;
};
