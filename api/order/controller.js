const { Op, Sequelize } = require('sequelize')

const order = require('./model')
const { errorResponses, successResponses } = require('../../utils')

module.exports = {
  getAll: async (req, res) => {
    const {
      search = '',
      show = 10,
      page = 0,
      orderBy = 'kode',
      sortBy = 'ASC',
    } = req.query
    const searchBy = { [Op.like]: `%${search}%` }

    try {
      const orders = await order.findAndCountAll({
        order: Sequelize.literal(`${orderBy} ${sortBy}`),
        where: {
          [Op.or]: [
            { kode: searchBy },
            { tanggal: searchBy },
            { jenis_marketing: searchBy },
            { jenis_pembayaran: searchBy },
            { '$customers.nama$': searchBy },
            { '$branchs.nama$': searchBy },
            { '$packages.nama$': searchBy },
            { '$branchs.nama$': searchBy },
          ],
        },
        offset: show * page,
        limit: show,
        attributes: {
          exclude: [
            'customersId',
            'branchsId',
            'packagesId',
            'addressesId',
            'sales',
            'closer',
          ],
        },
        include: [
          'customers',
          'branchs',
          'packages',
          'addresses',
          'adminSales',
          'adminCloser',
        ],
      })

      return successResponses[200](res, { data: orders })
    } catch (err) {
      return errorResponses[400](res, { message: err.message })
    }
  },

  create: async (req, res) => {
    try {
      const data = await order.create({ ...req.body })
      return successResponses[201](res, { data })
    } catch (err) {
      return errorResponses[400](res, { message: err.message })
    }
  },

  update: async (req, res) => {
    try {
      const data = await order.update(
        { ...req.body },
        {
          where: {
            id: req.params.id,
          },
        },
      )
      return successResponses[202](res, { data })
    } catch (err) {
      return errorResponses[400](res, { message: err.message })
    }
  },

  getById: async (req, res) => {
    try {
      const data = await order.findOne({
        where: {
          id: req.params.id,
        },
      })
      if (data != null) {
        res.send(successResponses[200](res, { data }))
      } else {
        res.send(errorResponses[400](res, { message: 'id not found' }))
      }
    } catch (err) {
      return errorResponses[400](res, { message: err.message })
    }
  },

  delete: async (req, res) => {
    try {
      const cek = await order.findOne({
        where: {
          id: req.params.id,
        },
      })
      if (cek != null) {
        const data = await order.destroy({
          where: {
            id: req.params.id,
          },
        })
        res.send(successResponses[200](res, { data }))
      } else {
        res.send(errorResponses[400](res, { message: 'id not found' }))
      }
    } catch (err) {
      return errorResponses[400](res, { message: err.message })
    }
  },
}
