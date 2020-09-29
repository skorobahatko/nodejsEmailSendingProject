const { config: { DB_NAME } } = require ('../../configs');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define ('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: DB_NAME,
        timestamps: false
    });
    return User;
};
