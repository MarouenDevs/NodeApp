/**
 *
 * @type {Sequelize}
 */
const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false
});


module.exports.sequelize =  sequelize;
module.exports.Sequelize = Sequelize;


