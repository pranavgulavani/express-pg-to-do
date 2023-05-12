require('dotenv').config();
const Sequelize = require('sequelize');


const sequelize = new Sequelize('todos',process.env.DB_USER,process.env.DB_PASSWORD ,{
    host:'localhost',
    dialect: 'postgres',
    pool: {
        max: 10,
        min: 0,
        idle: 10000
      },
})

module.exports = sequelize;