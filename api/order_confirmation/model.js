const { DataTypes } = require('sequelize')
const DatabaseConnection = require('../../config/database')
const orders = require('../order/model')

const order_confirmations = DatabaseConnection.define('order_confirmations', {
  ordersId: DataTypes.INTEGER,
  konfirmasi: DataTypes.ENUM('terima','tolak'),
  uang_muka: DataTypes.FLOAT,
  booking_fee: DataTypes.FLOAT,
  jumlah_angsuran: DataTypes.INTEGER,
  jatuh_tempo: DataTypes.DATEONLY,
  tanggal: DataTypes.DATEONLY,
})

order_confirmations.belongsTo(orders, { 
  as: 'orders'
})

orders.hasOne(order_confirmations, {
  foreignKey: 'ordersId',
  as: 'order_confirmations',
})

module.exports = order_confirmations