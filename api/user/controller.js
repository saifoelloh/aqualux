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
        : successResponses.created()
      res.json(respon)
    })
  },

  destroy: function(req, res) {
    order.destroy(req.con, req.params.id, function(err){
      const respon = err
        ? errorResponses['bad request'](err)
        : successResponses.deleted()
      res.json(respon)
    })
  },

  edit: function(req, res) {
    order.getID(req.con, req.params.id, function(err, rows) {
      const respon = err
        ? errorResponses['bad request'](err)
        : successResponses.success(rows)
      res.json(respon)
    })
  },

  update: function(req, res) {
    order.update(req.con, req.body, req.params.id, function(err) {
      const respon = err
        ? errorResponses['bad request'](err)
        : successResponses.updated()
      res.json(respon)
    })
  }

}
