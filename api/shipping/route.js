const router = require('express').Router()
const controller = require('./controller')
const controller_note = require('./controller_note')
const controller_realization = require('./controller_realization')
const {check,validationResult} = require('express-validator')

router
  .get('/', controller.index)
  .get('/note', controller_note.index)
  .get('/realization', controller_realization.index)

  .get('/create', controller.create)
  .get('/note/create', controller_note.create)
  .get('/realization/create', controller_realization.index)

  .get('/:id/edit', controller.edit)
  .get('/note/:id/edit', controller_note.edit)
  .get('/realization/:id/edit', controller_realization.edit)
  
  .post('/', [
    check('order_id')
      .notEmpty().withMessage('order_id tidak boleh kosong')
      .isInt().withMessage('order_id tidak valid'),
    check('konfirmasi').notEmpty().withMessage('data tidak boleh kosong'),
    check('bank').notEmpty().withMessage('bank tidak boleh kosong'),
    check('jadwal').isDate().withMessage('jadwal tidak valid')
  ], (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })
    else
      controller.store(req,res)
  })
  .post('/note', [
    check('sz_id')
      .notEmpty().withMessage('sz_id tidak boleh kosong')
      .isInt().withMessage('sz_id tidak valid'),
    check('note').notEmpty().withMessage('note tidak boleh kosong')
  ], (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })
    else
      controller_note.store(req,res)
  })
  .post('/realization', [
    check('shipping_id')
      .notEmpty().withMessage('shipping_id tidak boleh kosong')
      .isInt().withMessage('order_id tidak valid'),
    check('surat_jalan').notEmpty().withMessage('data tidak boleh kosong'),
    check('tanggal')
      .notEmpty().withMessage('bank tidak boleh kosong')
      .isDate().withMessage('tanggal tidak valid')
  ], (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })
    else
      controller_realization.store(req,res)
  })

  .put('/:id', [
    check('order_id')
      .notEmpty().withMessage('order_id tidak boleh kosong')
      .isInt().withMessage('order_id tidak valid'),
    check('konfirmasi').notEmpty().withMessage('data tidak boleh kosong'),
    check('bank').notEmpty().withMessage('bank tidak boleh kosong'),
    check('jadwal').isDate().withMessage('jadwal tidak valid')
  ], (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })
    else
      controller.update(req,res)
  })
  .put('/note/:id', [
    check('sz_id')
      .notEmpty().withMessage('sz_id tidak boleh kosong')
      .isInt().withMessage('sz_id tidak valid'),
    check('note').notEmpty().withMessage('note tidak boleh kosong')
  ], (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })
    else
      controller_note.update(req,res)
  })
  .put('/realization/:id', [
    check('shipping_id')
      .notEmpty().withMessage('shipping_id tidak boleh kosong')
      .isInt().withMessage('order_id tidak valid'),
    check('surat_jalan').notEmpty().withMessage('data tidak boleh kosong'),
    check('tanggal')
      .notEmpty().withMessage('bank tidak boleh kosong')
      .isDate().withMessage('tanggal tidak valid')
  ], (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })
    else
      controller_realization.update(req,res)
  })

  .delete('/:id', controller.destroy)
  .delete('/note/:id', controller_note.destroy)
  .delete('/realization/:id', controller_realization.destroy)

module.exports = router
