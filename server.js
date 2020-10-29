const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const queryParser = require('express-query-int')
const logger = require('morgan')

const addressRouter = require('./api/address')
const angsuranRouter = require('./api/angsuran')
const branchRouter = require('./api/branch')
const customerRouter = require('./api/customer')
const DataBaseConnection = require('./config/database')
const kabupatenRouter = require('./api/kabupaten')
const kecamatanRouter = require('./api/kecamatan')
const kode_posRouter = require('./api/kode_pos')
const orderRouter = require('./api/order')
const order_confirmationRouter = require('./api/order_confirmation')
const packageRouter = require('./api/package')
const provinsiRouter = require('./api/provinsi')
const shippingRouter = require('./api/shipping')
const userRouter = require('./api/user')
const { APP_PORT } = process.env
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

// api

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
  .use(queryParser())
  .use((_, res, next) => {
    res.io = io
    next()
  })
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

server.listen(APP_PORT, () => {
  console.clear()
  console.log(`Listening to port ${APP_PORT}`)
})
