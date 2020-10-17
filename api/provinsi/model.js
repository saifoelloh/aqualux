const { DataTypes } = require('sequelize')
const DatabaseConnection = require('../../config/database')
const address = require('../address/model')
const kabupaten = require('../kabupaten/model')

const provinsi = DatabaseConnection.define('provinses', {
  nama: DataTypes.INTEGER,
})

provinsi.hasMany(address, {
  foreignKey: 'provinsiId',
  as: 'address',
})

provinsi.hasMany(kabupaten, {
  foreignKey: 'provinsiId',
  as: 'kabupaten'
})

address.belongsTo(provinsi, {as: 'provinsi'})

kabupaten.belongsTo(provinsi, {as: 'provinsi'})

module.exports = provinsi