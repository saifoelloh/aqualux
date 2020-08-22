var moment = require('moment')

module.exports = {
  get: function (con, callback) {
    con.query('SELECT * FROM `customer`', callback)
  },

  getID: function (con, id, callback) {
    con.query(`SELECT * FROM \`customer\` WHERE id=${id}`, callback)
  },

  create: function (con, data, callback){
    var now = moment().format('YYYY-MM-DD h:mm:ss')
    con.query(`
      INSERT INTO \`customer\`
      SET nama='${data.nama}',
          telepon='${data.telepon}',
          email='${data.email}',
          alamat='${data.alamat}',
          created_at='${now}',
          updated_at='${now}'`,
      callback
    )
  },

  destroy: function(con, id, callback) {
    con.query(`DELETE FROM \`customer\` WHERE id=${id}`, callback)
  },

  update: function(con, data, id, callback) {
    var now = moment().format('YYYY-MM-DD h:mm:ss')
    con.query(
     `UPDATE \`customer\`
      SET nama='${data.nama}',
          telepon='${data.telepon}',
          email='${data.email}',
          alamat='${data.alamat}',
          updated_at='${now}'
      WHERE id='${id}'`,
      callback
    )
  }
}
