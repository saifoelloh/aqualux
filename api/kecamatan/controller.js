const kecamatan = require('./model')
const { successResponses, errorResponses } = require('../../utils')
const { Sequelize } = require('sequelize')
const DatabaseConnection = require('../../config/database')


module.exports = {
  getAll: async(req, res) => {
    const {
      search = '',
      show = 10,
      page = 1,
      orderBy = 'nama',
      sortBy = 'ASC',
    } = req.query

    try{
      let kecamatans = await kecamatan.findAll({
        order: Sequelize.literal(`${orderBy} ${sortBy}`),
        offset: show * page,
        limit: show,
        attributes: {
          exclude: 'kabupatenId'
        },
        include: 'kabupaten'
      })
      
      if(search != ''){
        kecamatans = await DatabaseConnection.query(
          `SELECT * FROM kecamatans WHERE MATCH(nama) AGAINST(:keyword IN BOOLEAN MODE) ORDER BY ${orderBy} ${sortBy} LIMIT :page, :show`,
          {
            model: kecamatan,
            type: Sequelize.QueryTypes.SELECT,
            replacements: {
              keyword: `*${search}*`,
              page: page * show,
              show: show,
            },
          },
        )
      }

      return successResponses[200](res, {data: kecamatans})
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  },
}