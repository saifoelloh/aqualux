const customer = require('./model')
const { successResponses, errorResponses, pagination } = require('../../utils')
const { Sequelize } = require('sequelize')
const DatabaseConnection = require('../../config/database')

module.exports = {
  getAll: async(req, res) => {
    const {
      search = '',
      show = 10,
      page = 0,
      orderBy = 'nama',
      sortBy = 'ASC',
    } = req.query

    try{
      let customers = await customer.findAndCountAll({
        order: Sequelize.literal(`${orderBy} ${sortBy}`),
        offset: show * page,
        limit: show,
        attributes: {
          exclude: 'addressesId'
        },
        include: 'addresses'
      })

      if(search != ''){
        customers = await DatabaseConnection.query(
          `SELECT * FROM customers WHERE
          MATCH(nama) AGAINST(:keyword IN BOOLEAN MODE)
          OR MATCH(email) AGAINST(:keyword IN BOOLEAN MODE)
          OR MATCH(telepon) AGAINST(:keyword IN BOOLEAN MODE)
          ORDER BY ${orderBy} ${sortBy} LIMIT :page, :show`,
          {
            model: customer,
            type: Sequelize.QueryTypes.SELECT,
            replacements: {
              keyword: `*${search}*`,
              page: page * show,
              show: show,
            },
          },
        )
      }

      return successResponses[200](res, {data: customers})
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  },

  create: async(req, res) => {
    try{
      const data = await customer.create({...req.body})
      return successResponses[201](res,{data})
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  },

  update: async(req, res) => {
    try{
      const data = await customer.update({...req.body},{
        where: {
          id: req.params.id
        }
      })
      return successResponses[202](res,{data})
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  },

  getById: async(req, res) => {
    try{
      const data = await customer.findOne({
        where: {
          id: req.params.id
        }
      })
      if(data!=null){
        res.send(successResponses[200](res, {data}))
      }else{
        res.send(errorResponses[400](res, {message: 'id not found'}))
      }
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  },

  delete: async(req, res) => {
    try{
      const cek = await customer.findOne({
        where: {
          id: req.params.id
        }
      })
      if(cek!=null){
        const data = await customer.destroy({
          where: {
            id: req.params.id
          }
        })
        res.send(successResponses[200](res, {data}))
      }else{
        res.send(errorResponses[400](res, {message: 'id not found'}))
      }
    }catch(err){
      return errorResponses[400](res, {message:err.message})
    }
  },
}