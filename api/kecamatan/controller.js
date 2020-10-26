const kecamatan = require('./model')
const { successResponses, errorResponses } = require('../../utils')

module.exports = {
  getAll: async(req, res) => {
    try{
      const kecamatans = await kecamatan.findAll({
        attributes: ['id','nama'],
        where: { kabupatenId: req.params.kab_id}
      })
      return successResponses[200](res, {data: kecamatans})
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  },
}