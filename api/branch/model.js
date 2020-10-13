const { DataTypes } = require('sequelize')
const DatabaseConnection = require('../../config/database')
const orders = require('../order/model')

const branchs = DatabaseConnection.define('branchs', {
  address_id: DataTypes.INTEGER,
  nama: DataTypes.STRING,
})

branchs.hasMany(orders, {
  foreignKey: 'branchsId',
  as: 'orders',
})

orders.belongsTo(branchs, { as: 'branchs'})

module.exports = branchs
