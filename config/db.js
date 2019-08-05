// 'use strict'

// var Sequelize = require('sequelize');
// var env = require('./env');
// var sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
//   host: env.DATABASE_HOST,
//   port: env.DATABASE_PORT,
//   dialect: env.DATABASE_DIALECT,
//   define: {
//     underscored: true
//   }
// });

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
// var db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

//Models/tables
// db.users = require('../models/user.js')(sequelize, Sequelize);


//Relations
// db.handle.belongsTo(db.Users);


// module.exports = db