const router = require('express').Router()
const controller = require('./controller')
const {check,validationResult} = require('express-validator')

router
  .get('/', controller.index)
  .get('/create', controller.create)
  .get('/:id/edit', controller.edit)
  .delete('/:id', controller.destroy)

  .post('/', [
    check('jenis_marketing').notEmpty().withMessage('data tidak boleh kosong'),
    check('jenis_pembayaran').notEmpty().withMessage('data tidak boleh kosong')
  ], (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })
    else
      controller.store(req,res)
  })

  .put('/:id', [
    check('jenis_marketing').notEmpty().withMessage('data tidak boleh kosong'),
    check('jenis_pembayaran').notEmpty().withMessage('data tidak boleh kosong')
  ], (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })
    else
      controller.update(req,res)
  })

module.exports = router
