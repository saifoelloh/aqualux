var moment = require('moment')

module.exports = {
  get: function (con, callback) {
    con.query('SELECT * FROM `shipping`', callback)
  },

  getID: function (con, id, callback) {
    con.query(`SELECT * FROM \`shipping\` WHERE id=${id}`, callback)
  },

  create: function (con, data, callback){
    var now = moment().format('YYYY-MM-DD h:mm:ss')
    con.query(`
      INSERT INTO \`shipping\`
      SET order_id='${data.order_id}',
          konfirmasi='${data.konfirmasi}',
          bank='${data.bank}',
          jadwal='${data.jadwal}',
          created_at='${now}',
          updated_at='${now}'`,
      callback
    )
  },

  destroy: function(con, id, callback) {
    con.query(`DELETE FROM \`shipping\` WHERE id=${id}`, callback)
  },

  update: function(con, data, id, callback) {
    var now = moment().format('YYYY-MM-DD h:mm:ss')
    con.query(
     `UPDATE \`shipping\`
      SET order_id='${data.order_id}',
          konfirmasi='${data.konfirmasi}',
          bank='${data.bank}',
          jadwal='${data.jadwal}',
          created_at='${now}',
          updated_at='${now}'
      WHERE id='${id}'`,
      callback
    )
  }
}
