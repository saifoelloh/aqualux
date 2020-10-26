const provinsi = require('./model')
const { successResponses, errorResponses } = require('../../utils')
const { Sequelize } = require('sequelize')
const DatabaseConnection = require('../../config/database')

module.exports = {
  getAll: async(req, res) => {
    const {
      search = '',
      show = 10,
      page = 0,
      orderBy = 'nama',
      sortBy = 'ASC',
    } = req.query

    try{
      let provinses = await provinsi.findAndCountAll({
        order: Sequelize.literal(`${orderBy} ${sortBy}`),
        offset: show * page,
        limit: show,
      })

      if(search != ''){
        provinses = await DatabaseConnection.query(
          `SELECT * FROM provinses WHERE MATCH(nama) AGAINST(:keyword IN BOOLEAN MODE) ORDER BY ${orderBy} ${sortBy} LIMIT :page, :show`,
          {
            model: provinsi,
            type: Sequelize.QueryTypes.SELECT,
            replacements: {
              keyword: `*${search}*`,
              page: page * show,
              show: show,
            },
          },
        )
      }
      
      return successResponses[200](res, {data: provinses})
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  }
}