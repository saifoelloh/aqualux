const { DataTypes } = require('sequelize')
const DatabaseConnection = require('../../config/database')
const order_confirmations = require('../order/model')

const angsurans = DatabaseConnection.define('angsurans', {
  usersId: DataTypes.INTEGER,
  orderconfirmationsId: DataTypes.INTEGER,
  nominal: DataTypes.INTEGER,
  tanggal: DataTypes.DATEONLY,
})

order_confirmations.hasMany(angsurans, {
  foreignKey: 'orderconfirmationsId',
  as: 'angsurans',
})

angsurans.belongsTo(order_confirmations, { as: 'order_confirmations'})

module.exports = angsurans