const Joi = require('joi')

const schema = Joi.object().keys({
    address_id: Joi.number().integer().required(),
    nama: Joi.string().required(),
})

module.exports = schema