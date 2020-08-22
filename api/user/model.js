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
          created_at='${data.created_at}',
          updated_at='${data.updated_at}'`,
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
          created_at='${data.created_at}',
          updated_at='${data.updated_at}'
          WHERE id='${id}'`,
      callback
    )
  }
}
