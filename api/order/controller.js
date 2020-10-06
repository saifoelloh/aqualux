const order = require('./model')
const {successResponses, errorResponses, pagination} = require('../../utils')

module.exports = {
  getAll: async(req, res) => {
    try{
      const orders = await order.findAll({
        attributes: {exclude: ['customersId']},
        include: 'customers' 
      })
      const data = pagination(orders,{...req.query})
      return successResponses[200](res, {data})
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  },

  
}