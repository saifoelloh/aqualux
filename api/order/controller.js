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
    order.create(req.con, req.body, function(err){
      const respon = err
        ? errorResponses['bad request'](err)
        : successResponses.successs(['horeee'])
      res.json(respon)
    })
  }
}
