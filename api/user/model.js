const { DataTypes } = require('sequelize')
const DatabaseConnection = require('../../config/database')
const orders = require('../order/model')

const users = DatabaseConnection.define('users', {
  nama: DataTypes.STRING,
  jabatan: DataTypes.STRING,
  telepon: DataTypes.STRING,
  email: DataTypes.STRING,
  address_id: DataTypes.INTEGER,
})

orders.belongsTo(users, {
  as: 'users',
})

module.exports = users