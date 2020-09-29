'use strict';
const { config: {} } = require ('../../configs');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        queryInterface.createTable ('users', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            }
        })
    },

    down: async (queryInterface, Sequelize) => {

    }
};
