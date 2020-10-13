const Joi = require('joi')

const schema = Joi.object().keys({
    ordersId: Joi.number().required(),
    konfirmasi: Joi.string().required(),
    uang_muka: Joi.number().required(),
    booking_fee: Joi.number().required(),
    jumlah_angsuran: Joi.number().required(),
    jatuh_tempo: Joi.date().required(),
    tanggal: Joi.date().required(),
})

module.exports = schema
