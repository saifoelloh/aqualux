const express = require('express')
const controller = require('./controller')
const orderRouter = express.Router()

orderRouter.get('/', controller.getAll)

module.exports = orderRouter