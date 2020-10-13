const Joi = require('joi')

const schema = Joi.object().keys({
    ordersId: Joi.number().integer().required(),
    surat_jalan: Joi.string().required(),
    jadwal: Joi.date().required(),
    catatan: Joi.string(),
    status: Joi.string().required(),
})

module.exports = schema
