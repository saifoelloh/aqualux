const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const DataBaseConnection = require('./config/database')
const customerRouter = require('./api/customer')
const orderRouter = require('./api/order')
const { APP_PORT } = process.env
const app = express()

require('dotenv').config()

DataBaseConnection.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database: ', err.message)
  })

app
  .use(logger('dev'))
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use('/api/customer', customerRouter)
  .use('/api/order', orderRouter)
  .listen(APP_PORT, () =>
    console.log(`Your app listening to port ${APP_PORT}`),
  )
