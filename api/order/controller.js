const order = require('./model')
const {successResponses, errorResponses, pagination} = require('../../utils')
const { Sequelize } = require('sequelize')
const DatabaseConnection = require('../../config/database')

module.exports = {
  getAll: async(req, res) => {
    const {
      search = '',
      show = 10,
      page = 0,
      orderBy = 'kode',
      sortBy = 'ASC',
    } = req.query

    try{  
      if(search!=''){
        let x = await DatabaseConnection.query(	
          `SELECT * FROM orders WHERE MATCH(kode) AGAINST(:keyword IN BOOLEAN MODE) ORDER BY ${orderBy} ${sortBy} LIMIT :page, :show`,	
          {	
            model: order,	
            mapToModel: true,
            type: Sequelize.QueryTypes.SELECT,	
            replacements: {	
              keyword: `*${search}*`,	
              page: page * show,	
              show,	
            },	
          },
        )

        if(x==''){
          return successResponses[200](res, {data: []})
        }else{
         let orders = await order.findAndCountAll({
            order: Sequelize.literal(`${orderBy} ${sortBy}`),
            offset: show * page,
            limit: show,
            attributes: {
              exclude: ['customersId', 'branchsId', 'packagesId','addressesId','sales','closer'],
            },
            include: ['customers','branchs','packages','addresses','adminSales','adminCloser'],
          })

          return successResponses[200](res, {data: orders})
        }
      }else{
        let orders = await order.findAndCountAll({
          order: Sequelize.literal(`${orderBy} ${sortBy}`),
          offset: show * page,
          limit: show,
          attributes: {
            exclude: ['customersId', 'branchsId', 'packagesId','addressesId','sales','closer'],
          },
          include: ['customers','branchs','packages','addresses','adminSales','adminCloser'],
        })

        return successResponses[200](res, {data: orders})
      }      
      
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  },

  create: async(req, res) => {
    try{
      const data = await order.create({...req.body})
      return successResponses[201](res,{data})
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  },

  update: async(req, res) => {
    try{
      const data = await order.update({...req.body},{
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
      const data = await order.findOne({
        where: {
          id: req.params.id
        },
        attributes: {
          exclude: ['customersId', 'branchsId', 'packagesId','addressesId','sales','closer'],
        },
        include: ['customers','branchs','packages','addresses','adminSales','adminCloser']
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
      const cek = await order.findOne({
        where: {
          id: req.params.id
        }
      })
      if(cek!=null){
        const data = await order.destroy({
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

  getByUser: async(req, res) => {
    try{
      const data = await order.findAll({
        where: {
          sales: req.params.id
        }
      })

      if(data!=null){
        let orders = await order.findAndCountAll({
          attributes: {
            exclude: ['customersId', 'branchsId', 'packagesId','addressesId','sales','closer'],
          },
          include: ['customers','branchs','packages','addresses','adminSales','adminCloser'],
        })

        return successResponses[200](res, {data: orders})
      }else{
        res.send(errorResponses[400](res, {message: 'id not found'}))
      }
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  }
}