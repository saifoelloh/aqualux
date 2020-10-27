const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const queryParser = require('express-query-int')
const DataBaseConnection = require('./config/database')
const { APP_PORT } = process.env
const app = express()

// api
const customerRouter = require('./api/customer')
const orderRouter = require('./api/order')
const branchRouter = require('./api/branch')
const packageRouter = require('./api/package')
const shippingRouter = require('./api/shipping')
const order_confirmationRouter = require('./api/order_confirmation')
const angsuranRouter = require('./api/angsuran')
const userRouter = require('./api/user')
const addressRouter = require('./api/address')
const provinsiRouter = require('./api/provinsi')
const kabupatenRouter = require('./api/kabupaten')
const kecamatanRouter = require('./api/kecamatan')
const kode_posRouter = require('./api/kode_pos')

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
  .use('*', cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(queryParser())
  .use('/api/customer', customerRouter)
  .use('/api/order', orderRouter)
  .use('/api/branch', branchRouter)
  .use('/api/package', packageRouter)
  .use('/api/shipping', shippingRouter)
  .use('/api/order_confirmation', order_confirmationRouter)
  .use('/api/angsuran', angsuranRouter)
  .use('/api/user', userRouter)
  .use('/api/address', addressRouter)
  .use('/api/provinsi', provinsiRouter)
  .use('/api/kabupaten', kabupatenRouter)
  .use('/api/kecamatan', kecamatanRouter)
  .use('/api/kode_pos', kode_posRouter)
  .listen(APP_PORT, () =>
    console.log(`Your app listening to port ${APP_PORT}`),
  )
