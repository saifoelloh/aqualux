const Sequelize = require('sequelize')
require('dotenv').config()

const{
    DB_HOST,
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD,
    DB_CONNECTION,
} = process.env

const DatabaseConnection = new Sequelize(
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: DB_CONNECTION,
    },
)

module.exports = DatabaseConnection