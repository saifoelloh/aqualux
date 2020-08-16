const express = require('express')
const app = express()
var methodOverride = require('method-override')
const path = require('path')
const con = require('./config/db.js')
require('dotenv').config()

const port = process.env.PORT

// Using pug template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// connecting route to database
app.use(function (req, res, next) {
  req.con = con
  next()
})

// parsing body request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// include router
const biodataRouter = require('./routes/biodataRouter')
const orderRouter = require('./routes/orderRouter')
const apiOrder = require('./api/order/route')

// routing
app
  .use('/biodata', biodataRouter)
  .use('/order', orderRouter)
  .use('/foo', apiOrder)

// starting server
app.listen(port, function () {
  console.log(`server listening on port ${port}`)
})
