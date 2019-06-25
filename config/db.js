'use strict'

var Sequelize = require('sequelize');
var env = require('./env');
var sequelize = new Sequelize(env.DB_USER, env.DB_HOST, env.DB_PASS, env.DB_DATABASE, {
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASS,
  define: {
    underscored: true
  }
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
var db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.users = require('../models/user.js')(sequelize, Sequelize);


//Relations
db.handle.belongsTo(db.Users);


module.exports = db;