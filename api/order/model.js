const {DataTypes} = require('sequelize')
const DatabaseConnection = require('../../config/database')

const orders = DatabaseConnection.define('orders', {
  // customersId: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'customers',
  //     key: 'id',
  //   },
  //   onDelete: 'CASCADE',
  // },
  // branch_id: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'branchs',
  //     key: 'id',
  //   },
  //   onDelete: 'CASCADE',
  // },
  // sales: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'sales',
  //     key: 'id',
  //   },
  //   onDelete: 'CASCADE',
  // },
  // closer: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'closers',
  //     key: 'id',
  //   },
  //   onDelete: 'CASCADE',
  // },
  // package_id: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'packages',
  //     key: 'id',
  //   },
  //   onDelete: 'CASCADE',
  // },
  // address_id: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'address',
  //     key: 'id',
  //   },
  //   onDelete: 'CASCADE',
  // },
  kode: DataTypes.STRING,
  jenis_marketing: DataTypes.ENUM('online','offline'),
  jenis_pembayaran: DataTypes.ENUM('cash','kredit'),
  tambahan: DataTypes.FLOAT,
  diskon: DataTypes.FLOAT,
  keterangan: DataTypes.STRING,
  bonus: DataTypes.STRING,
  tanggal: DataTypes.DATEONLY,
})

module.exports = orders