const Joi = require('joi')

module.exports = Joi.object().keys({
    nama: Joi.string().required(),
    telepon: Joi.string().required(),
    email: Joi.string().required(),
    address_id: Joi.number().required(),
})