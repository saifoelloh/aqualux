const { DataTypes } = require('sequelize')
const DatabaseConnection = require('../../config/database')
const orders = require('../order/model')

const shippings = DatabaseConnection.define('shippings', {
  ordersId: DataTypes.INTEGER,
  surat_jalan: DataTypes.STRING,
  jadwal: DataTypes.DATEONLY,
  catatan: DataTypes.STRING,
  status: DataTypes.ENUM('belum sampai', 'sudah sampai'),
})

shippings.belongsTo(orders, { 
  as: 'orders'
})

orders.hasOne(shippings, {
  foreignKey: 'ordersId',
  as: 'shippings',
})

module.exports = shippings