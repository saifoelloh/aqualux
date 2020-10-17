const express = require('express')
const controller = require('./controller')
const kabupatenRouter = express.Router()

kabupatenRouter
    .get('/', controller.getAll)

module.exports = kabupatenRouter