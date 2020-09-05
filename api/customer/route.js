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
    check('telepon')
      .notEmpty().withMessage('nomor telepon tidak boleh kosong')
      .isMobilePhone().withMessage('nomor telepon tidak valid'),
    check('email')
      .notEmpty().withMessage('email tidak boleh kosong')
      .isEmail().withMessage('email tidak valid'),
    check('alamat').notEmpty().withMessage('alamat tidak boleh kosong')
  ], (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })
    else
      controller.store(req,res)
  })

  .put('/:id', [
    check('nama').notEmpty().withMessage('nama tidak boleh kosong'),
    check('telepon')
      .notEmpty().withMessage('nomor telepon tidak boleh kosong')
      .isMobilePhone().withMessage('nomor telepon tidak valid'),
    check('email')
      .notEmpty().withMessage('email tidak boleh kosong')
      .isEmail().withMessage('email tidak valid'),
    check('alamat').notEmpty().withMessage('alamat tidak boleh kosong')
  ], (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })
    else
      controller.update(req,res)
  })

module.exports = router
