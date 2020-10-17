const Joi = require('joi')

const schema = Joi.object().keys({
    kode: Joi.string().required(),
    jenis_marketing: Joi.string().required(),
    jenis_pembayaran: Joi.string().required(),
    tambahan: Joi.number().required(),
    diskon: Joi.number().required(),
    keterangan: Joi.string().required(),
    bonus: Joi.string().required(),
    tanggal: Joi.date().required(),
    customersId: Joi.number().integer().required(),
})

module.exports = schema