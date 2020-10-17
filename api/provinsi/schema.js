const Joi = require('joi')

const schema = Joi.object().keys({
    nama: Joi.string().required()
})

module.exports = schema
