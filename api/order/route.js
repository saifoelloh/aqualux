const router = require('express').Router()
const controller = require('./controller')

router
  .get('/', controller.index)
  .get('/create', controller.create)
  // .get('/:id/edit', controller.edit)
  .post('/', controller.store)
  // .put('/:id', controller.update)
  .delete('/:id', controller.destroy)

module.exports = router
