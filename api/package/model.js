const { DataTypes } = require('sequelize')
const DatabaseConnection = require('../../config/database')
const orders = require('../order/model')

const packages = DatabaseConnection.define('packages', {
  nama: DataTypes.STRING,
  harga: DataTypes.INTEGER,
})

packages.hasOne(orders, {
  foreignKey: 'packagesId',
  as: 'orders',
})

orders.belongsTo(packages, { as: 'packages'})

module.exports = packages