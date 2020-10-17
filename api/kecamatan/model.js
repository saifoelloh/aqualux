const { DataTypes } = require('sequelize')
const DatabaseConnection = require('../../config/database')
const address = require('../address/model')
const kode_pos = require('../kode_pos/model')

const kecamatan = DatabaseConnection.define('kecamatan', {
  nama: DataTypes.INTEGER,
})

kecamatan.hasMany(kode_pos, {
  foreignKey: 'kecamatanId',
  as: 'kode_pos'
})

kecamatan.hasMany(address, {
  foreignKey: 'kecamatanId',
  as: 'address'
})

kode_pos.belongsTo(kecamatan, {as: 'kecamatan'})

address.belongsTo(kecamatan, {as: 'kecamatan'})

module.exports = kecamatan