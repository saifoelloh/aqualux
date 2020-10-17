const Joi = require('joi')

const schema = Joi.object().keys({
    addressId: Joi.number().integer().required(),
    nama: Joi.string().required(),
})

module.exports = schema