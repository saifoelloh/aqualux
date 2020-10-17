const express = require('express')
const controller = require('./controller')
const kode_posRouter = express.Router()

kode_posRouter
    .get('/', controller.getAll)

module.exports = kode_posRouter