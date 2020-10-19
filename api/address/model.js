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
  foreignKey: 'addressesId',
  as: 'customers',
})

customers.belongsTo(address, {as: 'addresses'})

address.hasOne(branchs, {
  foreignKey: 'addressesId',
  as: 'branchs',
})

branchs.belongsTo(address, {as: 'addresses'})

address.hasOne(orders, {
  foreignKey: 'addressesId',
  as: 'orders',
})

orders.belongsTo(address, {as:'addresses'})

address.hasOne(users, {
  foreignKey: 'addressesId',
  as: 'users',
})

users.belongsTo(address, {as: 'addresses'})

module.exports = address