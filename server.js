const express = require('express')
const app = express()
const methodOverride = require('method-override')
const path = require('path')
const con = require('./config/db.js')
require('dotenv').config()

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

// routing
app.use('/order', apiOrder)
app.use('/user', apiUser)

// starting server
const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log(`server listening on port ${port}`)
})
