const provinsi = require('./model')
const { errorResponses, successResponses } = require('../../utils')

module.exports = {
  getAll: async (req, res) => {
    try {
      const provinses = await provinsi.findAll({ attributes: ['id', 'nama'] })
      return successResponses[200](res, { data: provinses })
    } catch (err) {
      return errorResponses[400](res, { message: err.message })
    }
  },
}
