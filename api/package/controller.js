const { successResponses, errorResponses } = require('../../responses')
const package = require('./model')

module.exports = {
  index: function (req, res) {
    package.get(req.con, function (err, rows) {
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
    package.create(req.con, req.body, function(err){
      const respon = err
        ? errorResponses['bad request'](err)
        : successResponses.created()
      res.json(respon)
    })
  },

  destroy: function(req, res) {
    package.destroy(req.con, req.params.id, function(err){
      const respon = err
        ? errorResponses['bad request'](err)
        : successResponses.deleted()
      res.json(respon)
    })
  },

  edit: function(req, res) {
    package.getID(req.con, req.params.id, function(err, rows) {
      const respon = err
        ? errorResponses['bad request'](err)
        : successResponses.success(rows)
      res.json(respon)
    })
  },

  update: function(req, res) {
    package.update(req.con, req.body, req.params.id, function(err) {
      const respon = err
        ? errorResponses['bad request'](err)
        : successResponses.updated()
      res.json(respon)
    })
  }

}
