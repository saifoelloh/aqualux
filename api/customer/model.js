const { DataTypes } = require('sequelize')
const DatabaseConnection = require('../../config/database')
const orders = require('../order/model')

const customers = DatabaseConnection.define('customers', {
  nama: DataTypes.STRING,
  telepon: DataTypes.STRING,
  address_id: DataTypes.INTEGER,
  email: DataTypes.STRING,
})

customers.hasMany(orders, {
  foreignKey: 'customersId',
  as: 'orders',
})

orders.belongsTo(customers, { as: 'customers'})

module.exports = customers
