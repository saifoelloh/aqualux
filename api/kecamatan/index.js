const express = require('express')
const controller = require('./controller')
const kecamatanRouter = express.Router()

kecamatanRouter
    .get('/', controller.getAll)

module.exports = kecamatanRouter