const { DataTypes } = require('sequelize')
const DatabaseConnection = require('../../config/database')
const address = require('../address/model')

const kode_pos = DatabaseConnection.define('kode_pos', {
  kode: DataTypes.STRING,
})

kode_pos.hasMany(address, {
  foreignKey: 'kodeposId',
  as: 'address',
})

address.belongsTo(kode_pos, {as: 'kode_pos'})

module.exports = kode_pos