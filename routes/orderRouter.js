const express = require("express")
const router = express.Router()
const orderController = require("../controller/orderController")

router.get("/", orderController.index)

module.exports = router