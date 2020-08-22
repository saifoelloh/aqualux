var moment = require('moment')
var now = moment().format('YYYY-MM-DD h:mm:ss')

module.exports = {
  get: function (con, callback) {
    con.query('SELECT * FROM `order`', callback)
  },

  getID: function (con, id, callback) {
    con.query(`SELECT * FROM \`order\` WHERE id=${id}`, callback)
  },

  create: function (con, data, callback){
    con.query(`
      INSERT INTO \`order\`
      SET customer_id='${data.customer_id}',
          branch_id='${data.branch_id}',
          user_id='${data.user_id}',
          package_id='${data.package_id}',
          kode='${data.kode}',
          jenis_marketing='${data.jenis_marketing}',
          jenis_pembayaran='${data.jenis_pembayaran}',
          tanggal='${data.tanggal}',
          created_at='${now}',
          updated_at='${now}'`,
      callback
    )
  },

  destroy: function(con, id, callback) {
    con.query(`DELETE FROM \`order\` WHERE id=${id}`, callback)
  },

  update: function(con, data, id, callback) {
    con.query(
     `UPDATE \`order\`
      SET customer_id='${data.customer_id}',
          branch_id='${data.branch_id}',
          user_id='${data.user_id}',
          package_id='${data.package_id}',
          kode='${data.kode}',
          jenis_marketing='${data.jenis_marketing}',
          jenis_pembayaran='${data.jenis_pembayaran}',
          tanggal='${data.tanggal}',
          updated_at='${now}'
      WHERE id='${id}'`,
      callback
    )
  }
}
