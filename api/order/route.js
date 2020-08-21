const router = require('express').Router()
const controller = require('./controller')

router
  .get('/', controller.index)
  .get('/create', controller.create)
  .get('/:id', controller.index)
  .get('/:id/edit', controller.edit);

module.exports = router
