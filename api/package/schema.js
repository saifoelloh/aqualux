const Joi = require('joi')

const schema = Joi.object().keys({
    nama: Joi.string().required(),
    harga: Joi.number().integer(),
})

module.exports = schema
