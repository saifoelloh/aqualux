const Order = require("../model/Order")

module.exports = {
    index: function(req, res){
        Order.get(req.con, function(err, rows){
            res.render("order/index", { data: rows })
        })
    }
}