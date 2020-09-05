const router = require('express').Router()
const controller = require('./controller')
const {check,validationResult} = require('express-validator')

router
  .get('/', controller.index)
  .get('/create', controller.create)
  .get('/:id/edit', controller.edit)
  .post('/', [
    check('jenis_marketing')
      .notEmpty().withMessage('data tidak boleh kosong'),
    check('jenis_pembayaran')
      .notEmpty().withMessage('data tidak boleh kosong')
  ], (req,res) => {
    const errors = validationResult(req).array()
    if (errors)
      return res.status(400).json({ errors: errors })
    else
      controller.store(req,res)
  })
  .put('/:id', controller.update)
  .delete('/:id', controller.destroy)

module.exports = router
