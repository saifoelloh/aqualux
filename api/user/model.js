const { DataTypes } = require('sequelize')
const DatabaseConnection = require('../../config/database')
const orders = require('../order/model')

const users = DatabaseConnection.define('users', {
  nama: DataTypes.STRING,
  jabatan: DataTypes.STRING,
  telepon: DataTypes.STRING,
  email: DataTypes.STRING,
  addressesId: DataTypes.INTEGER,
})

users.hasMany(orders, {
  foreignKey: 'closer',
  as: 'orders'
})

users.hasMany(orders, {
  as: 'sales',
  foreignKey: 'sales',
})

orders.belongsTo(users, {
  as: 'adminSales',
  targetKey: 'id',
  foreignKey: 'sales',
})

orders.belongsTo(users, {
  as: 'adminCloser',
  targetKey: 'id',
  foreignKey: 'closer',
})

module.exports = users