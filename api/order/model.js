var moment = require('moment')

module.exports = {
  get: function (con, callback) {
    con.query('SELECT order.customer_id, customer.nama as nama_customer, order.branch_id, branch.nama as nama_branch, order.user_id, user.nama as nama_user, order.package_id, package.nama as nama_package, order.kode, order.jenis_marketing, order.jenis_pembayaran, order.tanggal, order.created_at, order.updated_at FROM `order` JOIN customer ON order.customer_id=customer.id JOIN branch ON order.branch_id=branch.id JOIN user ON order.user_id=user.id JOIN package ON order.package_id=package.id', callback)
  },

  getID: function (con, id, callback) {
    con.query(`SELECT * FROM \`order\` WHERE id=${id}`, callback)
  },

  create: function (con, data, callback){
    var now = moment().format('YYYY-MM-DD h:mm:ss')
    var tanggal = moment(data.tanggal).format('YYYYMMDD')
    // ORD-001040920200001
    // 001 => semisal cabang
    // 04092020 => tanggal
    // 0001 => total order per hari
    var tes;
    
    con.query(`SELECT * FROM \`order\` WHERE tanggal=${tanggal}`, (err,rows) => {
        if(err) throw err;
        setValue(rows.length)
      });
    
    function setValue(value) {
      var cabang, total;
      if(data.branch_id<10)
        cabang = "00" + data.branch_id
      else if(data.branch_id<100)
        cabang = "0" + data.branch_id

      tes = value;
      tes++;

      if(tes<10)
        total = "000" + tes
      else if(tes<100)
        total = "00" + tes
      else if(tes<1000)
        total = "0" + tes

      var text = "ORD-" + cabang + tanggal + total;

      con.query(`
        INSERT INTO \`order\`
        SET customer_id='${data.customer_id}',
            branch_id='${data.branch_id}',
            user_id='${data.user_id}',
            package_id='${data.package_id}',
            kode='${text}',
            jenis_marketing='${data.jenis_marketing}',
            jenis_pembayaran='${data.jenis_pembayaran}',
            tanggal='${data.tanggal}',
            created_at='${now}',
            updated_at='${now}'`,
        callback
      )
    }
  },

  destroy: function(con, id, callback) {
    con.query(`DELETE FROM \`order\` WHERE id=${id}`, callback)
  },

  update: function(con, data, id, callback) {
    var now = moment().format('YYYY-MM-DD h:mm:ss')
    con.query(
     `UPDATE \`order\`
      SET customer_id='${data.customer_id}',
          branch_id='${data.branch_id}',
          user_id='${data.user_id}',
          package_id='${data.package_id}',
          jenis_marketing='${data.jenis_marketing}',
          jenis_pembayaran='${data.jenis_pembayaran}',
          tanggal='${data.tanggal}',
          updated_at='${now}'
      WHERE id='${id}'`,
      callback
    )
  }
}
