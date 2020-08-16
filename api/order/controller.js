const order = require('./model')
const { successResponses, errorResponses } = require('../../responses')

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
}
