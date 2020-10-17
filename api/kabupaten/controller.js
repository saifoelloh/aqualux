const kabupaten = require('./model')
const { successResponses, errorResponses, pagination } = require('../../utils')

module.exports = {
  getAll: async(req, res) => {
    try{
      const kabupatens = await kabupaten.findAll({
        attributes: {
          exclude: 'provinsiId'
        },
        include: 'provinsi'
      })
      const data = pagination(kabupatens, {...req.query})
      return successResponses[200](res, {data})
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  }
}