const express = require('express')
const { validation } = require('../../utils/middleware')
const controller = require('./controller')
const schema = require('./schema')
const provinsiRouter = express.Router()

provinsiRouter
    .get('/', controller.getAll)

module.exports = provinsiRouter