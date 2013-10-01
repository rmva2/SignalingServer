// Modelos ORM
var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_NAME, 
                              process.env.DATABASE_USER, 
                              process.env.DATABASE_PASSWORD, 
            { dialect: process.env.DATABASE_DIALECT, 
              protocol: process.env.DATABASE_PROTOCOL, 
              port: process.env.DATABASE_PORT,
              host: process.env.DATABASE_HOST,
              storage: process.env.DATABASE_STORAGE,
              omitNull: true});

exports.sequelize = sequelize;
//exports.Cancion = sequelize.import(path.join(__dirname,'cancion'));