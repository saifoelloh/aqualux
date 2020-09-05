const router = require('express').Router()
const controller = require('./controller')
const {check,validationResult} = require('express-validator')

router
  .get('/', controller.index)
  .get('/create', controller.create)
  .get('/:id/edit', controller.edit)
  .delete('/:id', controller.destroy)

  .post('/', [
    check('nama').notEmpty().withMessage('nama tidak boleh kosong'),
    check('harga')
      .notEmpty().withMessage('harga tidak boleh kosong')
      .isInt().withMessage('harga tidak valid')
  ], (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })
    else
      controller.store(req,res)
  })

  .put('/:id', [
    check('nama').notEmpty().withMessage('nama tidak boleh kosong'),
    check('harga')
      .notEmpty().withMessage('harga tidak boleh kosong')
      .isInt().withMessage('harga tidak valid')
  ], (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })
    else
      controller.update(req,res)
  })

module.exports = router
