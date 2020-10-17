const kode_pos = require('./model')
const { successResponses, errorResponses, pagination } = require('../../utils')

module.exports = {
  getAll: async(req, res) => {
    try{
      const kode_poses = await kode_pos.findAll({
        attributes: {
          exclude: 'kecamatanId'
        },
        include: 'kecamatan'
      })
      const data = pagination(kode_poses, {...req.query})
      return successResponses[200](res, {data})
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  }
}