module.exports = {
  get: function (con, callback) {
    con.query('SELECT * FROM `order`', callback)
  },

  create: function (con, data, callback){
    con.query(`
      INSERT INTO order
      SET customer_id='${data.custID}',
          branch_id='${data.branchID}',
          user_id='${data.userID}',
          package_id='${data.packageID}',
          kode='${data.kode}',
          jenis_marketing='${data.jenisMarketing}',
          jenis_pembayaran='${data.jenisPembayaran}',
          tanggal='${data.tanggal}'`,
      callback
    )
  },


}
