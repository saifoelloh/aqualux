const Joi = require('joi')

const schema = Joi.object().keys({
    addressesId: Joi.number().integer().required(),
    nama: Joi.string().required(),
})

module.exports = schema