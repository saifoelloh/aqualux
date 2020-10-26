const package = require('./model')
const { successResponses, errorResponses, pagination } = require('../../utils')
const { Sequelize } = require('sequelize')
const DatabaseConnection = require('../../config/database')
const shipping = require('./model')

module.exports = {
  getAll: async(req, res) => {
    const {
      search = '',
      show = 10,
      page = 0,
      orderBy = 'surat_jalan',
      sortBy = 'ASC',
    } = req.query

    try{
      let shippings = await package.findAndCountAll({
        order: Sequelize.literal(`${orderBy} ${sortBy}`),
        offset: show * page,
        limit: show,
        attributes: {
          exclude: ['ordersId'],
        },
        include: 'orders'
      })

      if(search != ''){
        shippings = await DatabaseConnection.query(
          `SELECT * FROM shippings WHERE MATCH(surat_jalan) AGAINST(:keyword IN BOOLEAN MODE) ORDER BY ${orderBy} ${sortBy} LIMIT :page, :show`,
          {
            model: shipping,
            type: Sequelize.QueryTypes.SELECT,
            replacements: {
              keyword: `*${search}*`,
              page: page * show,
              show: show,
            },
          },
        )
      }

      return successResponses[200](res, {data: shippings})
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  },

  create: async(req, res) => {
    try{
      const data = await package.create({...req.body})
      return successResponses[201](res,{data})
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  },

  update: async(req, res) => {
    try{
      const data = await package.update({...req.body},{
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
      const data = await package.findOne({
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
      const cek = await package.findOne({
        where: {
          id: req.params.id
        }
      })
      if(cek!=null){
        const data = await package.destroy({
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