const address = require('./model')
const { successResponses, errorResponses, pagination } = require('../../utils')
const { Sequelize } = require('sequelize')
const DatabaseConnection = require('../../config/database')

module.exports = {
  getAll: async(req, res) => {
    const {
      search = '',
      show = 10,
      page = 0,
      orderBy = 'jalan',
      sortBy = 'ASC',
    } = req.query

    try{
      let addresses = await address.findAndCountAll({
        order: Sequelize.literal(`${orderBy} ${sortBy}`),
        offset: show * page,
        limit: show,
        attributes: {
          exclude: ['provinsiId','kabupatenId','kecamatanId','kodeposId','kodePosId']
        },
        include: ['provinsi','kabupaten','kecamatan','kode_pos']
      })
      
      if(search != ''){
        addresses = await DatabaseConnection.query(
          `SELECT * FROM addresses WHERE MATCH(jalan) AGAINST(:keyword IN BOOLEAN MODE) ORDER BY ${orderBy} ${sortBy} LIMIT :page, :show`,
          {
            model: address,
            type: Sequelize.QueryTypes.SELECT,
            replacements: {
              keyword: `*${search}*`,
              page: page * show,
              show: show,
            },
          },
        )
      }

      return successResponses[200](res, {data: addresses})
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  },

  create: async(req, res) => {
    try{
      const data = await address.create({...req.body})
      return successResponses[201](res,{data})
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  },

  update: async(req, res) => {
    try{
      const data = await address.update({...req.body},{
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
      const data = await address.findOne({
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
      const cek = await address.findOne({
        where: {
          id: req.params.id
        }
      })
      if(cek!=null){
        const data = await address.destroy({
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