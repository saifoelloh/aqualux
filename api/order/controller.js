const { successResponses, errorResponses } = require('../../responses')
const order = require('./model')

module.exports = {
  index: function (req, res) {
    order.get(req.con, function (err, rows) {
      const resp = err
        ? errorResponses['bad request'](err)
        : successResponses.success(rows)
      res.json(resp)
    })
  },

  create: function (req, res) {
    res.json(successResponses.success(['selamat', 'anda', 'berhasil']))
  },

  store: function(req, res) {
    var customer_id = req.body.customer_id;
    var branch_id = req.body.branch_id;
    var user_id = req.body.user_id;
    var package_id = req.body.package_id;
    var kode = req.body.kode;
    var jenis_marketing = req.body.jenis_marketing;
    var jenis_pembayaran =req.body.jenis_pembayaran;
    var tanggal = req.body.tanggal;
    var created_at = req.body.created_at;
    var updated_at = req.body.updated_at;

    req.con.query('INSERT INTO `order` (customer_id,branch_id,user_id,package_id,kode,jenis_marketing,jenis_pembayaran,tanggal,created_at,updated_at) values (?,?,?,?,?,?,?,?,?,?)',
          [customer_id,branch_id,user_id,package_id,kode,jenis_marketing,jenis_pembayaran,tanggal,created_at,updated_at],
          function(err){
            const respon = err
              ? errorResponses['bad request'](err)
              : successResponses.created()
            res.json(respon)
          }
    );

    // order.create(req.con, req.body, function(err){
    //   const respon = err
    //     ? errorResponses['bad request'](err)
    //     : successResponses.successs(['horeee'])
    //   res.json(respon)
    // })
  },


}
