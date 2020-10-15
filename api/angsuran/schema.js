const Joi = require('joi')

const schema = Joi.object().keys({
    usersId: Joi.number().required(),
    orderconfirmationsId: Joi.number().required(),
    nominal: Joi.number().required(),
    tanggal: Joi.date().required(),
})

module.exports = schema
