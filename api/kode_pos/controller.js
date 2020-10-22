const kode_pos = require('./model')
const { successResponses, errorResponses } = require('../../utils')
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
      let kode_poses = await kode_pos.findAll({
        order: Sequelize.literal(`${orderBy} ${sortBy}`),
        offset: show * page,
        limit: show,
        attributes: {
          exclude: 'kecamatanId'
        },
        include: 'kecamatan'
      })

      if(search != ''){
        kode_poses = await DatabaseConnection.query(
          `SELECT * FROM kode_poses WHERE MATCH(kode) AGAINST(:keyword IN BOOLEAN MODE) ORDER BY ${orderBy} ${sortBy} LIMIT :page, :show`,
          {
            model: kode_pos,
            type: Sequelize.QueryTypes.SELECT,
            replacements: {
              keyword: `*${search}*`,
              page: page * show,
              show: show,
            },
          },
        )
      }

      return successResponses[200](res, {data: kode_poses})
    }catch(err){
      return errorResponses[400](res, {message: err.message})
    }
  }
}