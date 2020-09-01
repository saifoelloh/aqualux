var moment = require('moment')

module.exports = {
  get: function (con, callback) {
    con.query('SELECT * FROM `shipping_note`', callback)
  },

  getID: function (con, id, callback) {
    con.query(`SELECT * FROM \`shipping_note\` WHERE id=${id}`, callback)
  },

  create: function (con, data, callback){
    var now = moment().format('YYYY-MM-DD h:mm:ss')
    con.query(`
      INSERT INTO \`shipping_note\`
      SET sz_id='${data.sz_id}',
          note='${data.note}',
          created_at='${now}',
          updated_at='${now}'`,
      callback
    )
  },

  destroy: function(con, id, callback) {
    con.query(`DELETE FROM \`shipping_note\` WHERE id=${id}`, callback)
  },

  update: function(con, data, id, callback) {
    var now = moment().format('YYYY-MM-DD h:mm:ss')
    con.query(
     `UPDATE \`shipping_note\`
      SET sz_id='${data.sz_id}',
          note='${data.note}',
          updated_at='${now}'
      WHERE id='${id}'`,
      callback
    )
  }
}
