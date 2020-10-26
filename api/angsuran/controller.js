const angsuran = require('./model')
const { successResponses, errorResponses, pagination } = require('../../utils')

module.exports = {
  getAll: async(req, res) => {
    const {
      search = '',
      show = 10,
      page = 0,
      orderBy = 'tanggal',
      sortBy = 'ASC',
    } = req.query

    try{
      let angsurans = await angsuran.findAndCountAll({
        order: Sequelize.literal(`${orderBy} ${sortBy}`),
        offset: show * page,
        limit: show,
        attributes : {
          exclude: ['orderconfirmationsId','orderConfirmationsId','usersId']
        },
        include: ['order_confirmations','users'],
      })

      if(search != ''){
        angsurans = await DatabaseConnection.query(
          `SELECT * FROM angsurans WHERE MATCH(tanggal) AGAINST(:keyword IN BOOLEAN MODE) ORDER BY ${orderBy} ${sortBy} LIMIT :page, :show`,
          {
            model: angsuran,
            type: Sequelize.QueryTypes.SELECT,
            replacements: {
              keyword: `*${search}*`,
              page: page * show,
              show: show,
            },
          },
        )
      }
      
      return successResponses[200](res, {data: orders})
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  },

  create: async(req, res) => {
    try{
      const data = await angsuran.create({...req.body})
      return successResponses[201](res,{data})
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  },

  update: async(req, res) => {
    try{
      const data = await angsuran.update({...req.body},{
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
      const data = await angsuran.findOne({
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
      const cek = await angsuran.findOne({
        where: {
          id: req.params.id
        }
      })
      if(cek!=null){
        const data = await angsuran.destroy({
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