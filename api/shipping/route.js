const router = require('express').Router()
const controller = require('./controller')
const controller_note = require('./controller_note')
const controller_realization = require('./controller_realization')

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
  
  .post('/', controller.store)
  .post('/note', controller_note.store)
  .post('/realization', controller_realization.store)
  
  .put('/:id', controller.update)
  .put('/note/:id', controller_note.update)
  .put('/realization/:id', controller_realization.update)

  .delete('/:id', controller.destroy)
  .delete('/note/:id', controller_note.destroy)
  .delete('/realization/:id', controller_realization.destroy)

module.exports = router
