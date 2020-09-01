const express = require('express')
const app = express()
const methodOverride = require('method-override')
const path = require('path')
const con = require('./config/db.js')
const cors = require('cors')

require('dotenv').config()

app.use(cors())

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
const apiOrder = require('./api/order/route')
const apiUser = require('./api/user/route')
const apiPackage = require('./api/package/route')
const apiCustomer = require('./api/customer/route')
const apiBranch = require('./api/branch/route')
const apiShipping = require('./api/shipping/route')

// routing
app.use('/order', apiOrder)
app.use('/user', apiUser)
app.use('/package', apiPackage)
app.use('/customer', apiCustomer)
app.use('/branch', apiBranch)
app.use('/shipping', apiShipping)

// starting server
const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log(`server listening on port ${port}`)
})
