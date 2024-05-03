//db.js, require in index.js

const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: 'database/database.sqlite'
});

const User = require('../models/User')(sequelize, Sequelize);

// Sync models with the database
sequelize.sync();

// Added to export for index.js
module.exports = {
    sequelize,
    User
}