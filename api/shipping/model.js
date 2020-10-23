const { DataTypes } = require('sequelize')
const DatabaseConnection = require('../../config/database')
const orders = require('../order/model')

const shipping = DatabaseConnection.define('shippings', {
  ordersId: DataTypes.INTEGER,
  surat_jalan: DataTypes.STRING,
  jadwal: DataTypes.DATEONLY,
  catatan: DataTypes.STRING,
  status: DataTypes.ENUM('belum sampai', 'sudah sampai'),
})

shipping.belongsTo(orders, { 
  as: 'orders'
})

orders.hasOne(shipping, {
  foreignKey: 'ordersId',
  as: 'shippings',
})

module.exports = shipping