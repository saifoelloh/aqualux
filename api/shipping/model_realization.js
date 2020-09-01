var moment = require('moment')

module.exports = {
  get: function (con, callback) {
    con.query('SELECT * FROM `shipping_realization`', callback)
  },

  getID: function (con, id, callback) {
    con.query(`SELECT * FROM \`shipping_realization\` WHERE id=${id}`, callback)
  },

  create: function (con, data, callback){
    var now = moment().format('YYYY-MM-DD h:mm:ss')
    con.query(`
      INSERT INTO \`shipping_realization\`
      SET shipping_id='${data.shipping_id}',
          surat_jalan='${data.surat_jalan}',
          tanggal='${data.tanggal}',
          created_at='${now}',
          updated_at='${now}'`,
      callback
    )
  },

  destroy: function(con, id, callback) {
    con.query(`DELETE FROM \`shipping_realization\` WHERE id=${id}`, callback)
  },

  update: function(con, data, id, callback) {
    var now = moment().format('YYYY-MM-DD h:mm:ss')
    con.query(
     `UPDATE \`shipping_realization\`
      SET shipping_id='${data.shipping_id}',
          surat_jalan='${data.surat_jalan}',
          tanggal='${data.tanggal}',
          updated_at='${now}'
      WHERE id='${id}'`,
      callback
    )
  }
}
