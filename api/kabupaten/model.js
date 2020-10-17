const { DataTypes } = require('sequelize')
const DatabaseConnection = require('../../config/database')
const address = require('../address/model')
const kecamatan = require('../kecamatan/model')

const kabupaten = DatabaseConnection.define('kabupatens', {
  nama: DataTypes.INTEGER,
})

kabupaten.hasMany(kecamatan, {
  foreignKey: 'kabupatenId',
  as: 'kecamatan'
})

kabupaten.hasMany(address, {
  foreignKey: 'kabupatenId',
  as: 'address'
})

kecamatan.belongsTo(kabupaten, {as: 'kabupaten'})

address.belongsTo(kabupaten, {as: 'kabupaten'})

module.exports = kabupaten