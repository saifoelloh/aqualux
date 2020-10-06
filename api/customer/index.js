const express = require('express')
const { validation } = require('../../utils/middleware')
const controller = require('./controller')
const schema = require('./schema')
const customerRouter = express.Router()

customerRouter
    .get('/', controller.getAll)
    .post('/', validation(schema), controller.create)
    .get('/:id/update', controller.getById)
    .put('/:id', validation(schema), controller.update)
    .delete('/:id/delete', controller.delete)

module.exports = customerRouter