const { DataTypes } = require('sequelize')
const DatabaseConnection = require('../../config/database')
const order_confirmations = require('../order_confirmation/model')
const users = require('../user/model')

const angsurans = DatabaseConnection.define('angsurans', {
  usersId: DataTypes.INTEGER,
  orderconfirmationsId: DataTypes.INTEGER,
  nominal: DataTypes.INTEGER,
  tanggal: DataTypes.DATEONLY,
})

angsurans.belongsTo(order_confirmations, { as: 'order_confirmations'})

order_confirmations.hasMany(angsurans, {
  foreignKey: 'orderconfirmationsId',
  as: 'angsurans',
})

users.hasOne(angsurans, {
  foreignKey: 'usersId',
  as: 'users',
})

angsurans.belongsTo(users, { as: 'users'})

module.exports = angsurans