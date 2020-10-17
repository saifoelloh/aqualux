const { DataTypes } = require('sequelize')
const DatabaseConnection = require('../../config/database')
const customers = require('../customer/model')
const branchs = require('../branch/model')
const orders = require('../order/model')
const users = require('../user/model')

const address = DatabaseConnection.define('addresses', {
  provinsiId: DataTypes.INTEGER,
  kabupatenId: DataTypes.INTEGER,
  kecamatanId: DataTypes.INTEGER,
  kodeposId: DataTypes.INTEGER,
  jalan: DataTypes.STRING,
})

address.hasOne(customers, {
  foreignKey: 'addressId',
  as: 'customers',
})

customers.belongsTo(address, {as: 'address'})

address.hasOne(branchs, {
  foreignKey: 'addressId',
  as: 'branchs',
})

branchs.belongsTo(address, {as: 'address'})

address.hasOne(orders, {
  foreignKey: 'addressId',
  as: 'orders',
})

orders.belongsTo(address, {as:'addresses'})

address.hasOne(users, {
  foreignKey: 'addressId',
  as: 'users',
})

users.belongsTo(address, {as: 'address'})

module.exports = address