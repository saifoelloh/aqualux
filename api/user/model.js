const { DataTypes } = require('sequelize')
const DatabaseConnection = require('../../config/database')
const orders = require('../order/model')

const users = DatabaseConnection.define('users', {
  nama: DataTypes.STRING,
  jabatan: DataTypes.STRING,
  telepon: DataTypes.STRING,
  email: DataTypes.STRING,
  addressId: DataTypes.INTEGER,
})

users.hasMany(orders, {
  foreignKey: ['sales','closer'],
  as: 'orders'
})

orders.belongsTo(users)

module.exports = users