const kabupaten = require('./model')
const { errorResponses, successResponses } = require('../../utils')

module.exports = {
  getAll: async (req, res) => {
    try {
      const kabupatens = await kabupaten.findAll({
        attributes: ['id', 'nama'],
        where: { provinsiId: req.params.prov_id },
      })
      return successResponses[200](res, { data: kabupatens })
    } catch (err) {
      return errorResponses[400](res, { message: err.message })
    }
  },
}
