const router = require('express').Router()
const controller = require('./controller')

router
  .get('/', controller.index)
  .get('/create', controller.create)
  .get('/:id', controller.index)

module.exports = router
