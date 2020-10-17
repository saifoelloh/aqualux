const { DataTypes } = require('sequelize')
const DatabaseConnection = require('../../config/database')
const orders = require('../order/model')

const branchs = DatabaseConnection.define('branchs', {
  addressId: DataTypes.INTEGER,
  nama: DataTypes.STRING,
})

branchs.hasMany(orders, {
  foreignKey: 'branchsId',
  as: 'orders',
})

orders.belongsTo(branchs, { as: 'branchs'})

module.exports = branchs
