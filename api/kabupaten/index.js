const express = require('express')
const controller = require('./controller')
const kabupatenRouter = express.Router()

kabupatenRouter.get('/:prov_id', controller.getAll)

module.exports = kabupatenRouter

