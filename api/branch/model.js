var moment = require('moment')

module.exports = {
  get: function (con, callback) {
    con.query('SELECT * FROM `branch`', callback)
  },

  getID: function (con, id, callback) {
    con.query(`SELECT * FROM \`branch\` WHERE id=${id}`, callback)
  },

  create: function (con, data, callback){
    var now = moment().format('YYYY-MM-DD h:mm:ss')
    con.query(`
      INSERT INTO \`branch\`
      SET nama='${data.nama}',
          alamat='${data.alamat}',
          created_at='${now}',
          updated_at='${now}'`,
      callback
    )
  },

  destroy: function(con, id, callback) {
    con.query(`DELETE FROM \`branch\` WHERE id=${id}`, callback)
  },

  update: function(con, data, id, callback) {
    var now = moment().format('YYYY-MM-DD h:mm:ss')
    con.query(
     `UPDATE \`branch\`
      SET nama='${data.nama}',
          alamat='${data.alamat}',
          updated_at='${now}'
      WHERE id='${id}'`,
      callback
    )
  }
}
