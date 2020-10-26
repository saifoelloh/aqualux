const express = require('express')
const controller = require('./controller')
const kecamatanRouter = express.Router()

kecamatanRouter.get('/:kab_id', controller.getAll)

module.exports = kecamatanRouter