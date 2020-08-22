var moment = require('moment')
var now = moment().format('YYYY-MM-DD h:mm:ss')

module.exports = {
  get: function (con, callback) {
    con.query('SELECT * FROM `package`', callback)
  },

  getID: function (con, id, callback) {
    con.query(`SELECT * FROM \`package\` WHERE id=${id}`, callback)
  },

  create: function (con, data, callback){
    con.query(`
      INSERT INTO \`package\`
      SET nama='${data.nama}',
          harga='${data.harga}',
          created_at='${now}',
          updated_at='${now}'`,
      callback
    )
  },

  destroy: function(con, id, callback) {
    con.query(`DELETE FROM \`package\` WHERE id=${id}`, callback)
  },

  update: function(con, data, id, callback) {
    con.query(
     `UPDATE \`package\`
      SET nama='${data.nama}',
          harga='${data.harga}',
          updated_at='${now}'
      WHERE id='${id}'`,
      callback
    )
  }
}
