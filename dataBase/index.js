const {Sequelize, DataTypes}  = require ('sequelize');
const path = require ('path');
const fs = require ('fs');
const {config: {DB_NAME, DB_USERNAME, DB_PASSWORD}} = require('../configs')

module.exports = (() => {
    let instance;
    function InitConnection() {
        const client = new Sequelize ('users', 'root', 'root1', {
            host: 'localhost',
            dialect: 'mysql'
        });
        let models = {};

        function getModels() {
            fs.readdir (path.join (process.cwd (), 'dataBase', 'models'), (err, files) => {
                files.forEach (file => {
                    const [ modelName ] = file.split ('.');
                    models[modelName] = require (path.join (process.cwd (), 'dataBase', 'models', modelName)) (client, DataTypes);
                })
            })
        }

        return {
            setModels: () => getModels (),
            getModel: (modelname) => models[modelname]
        }
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = InitConnection ()
            }
            return instance;
        }
    }

}) ();
