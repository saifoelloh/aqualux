var moment = require('moment')
var now = moment().format('YYYY-MM-DD h:mm:ss')

module.exports = {
  get: function (con, callback) {
    con.query('SELECT * FROM `user`', callback)
  },

  getID: function (con, id, callback) {
    con.query(`SELECT * FROM \`user\` WHERE id=${id}`, callback)
  },

  create: function (con, data, callback){
    con.query(`
      INSERT INTO \`user\`
      SET nama='${data.nama}',
          jabatan='${data.jabatan}',
          telepon='${data.telepon}',
          email='${data.email}',
          alamat='${data.alamat}',
          created_at='${now}',
          updated_at='${now}'`,
      callback
    )
  },

  destroy: function(con, id, callback) {
    con.query(`DELETE FROM \`user\` WHERE id=${id}`, callback)
  },

  update: function(con, data, id, callback) {
    con.query(
     `UPDATE \`user\`
      SET nama='${data.nama}',
          jabatan='${data.jabatan}',
          telepon='${data.telepon}',
          email='${data.email}',
          alamat='${data.alamat}',
          updated_at='${now}'
      WHERE id='${id}'`,
      callback
    )
  }
}
