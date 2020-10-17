const kecamatan = require('./model')
const { successResponses, errorResponses, pagination } = require('../../utils')

module.exports = {
  getAll: async(req, res) => {
    try{
      const kecamatans = await kecamatan.findAll({
        attributes: {
          exclude: 'kabupatenId'
        },
        include: 'kabupaten'
      })
      const data = pagination(kecamatans, {...req.query})
      return successResponses[200](res, {data})
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  }
}