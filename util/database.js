const Sequelize = require("sequelize").Sequelize //this is the import

const sequelize = new Sequelize('nodeapp', 'root', '1234567', { //this is the object
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;