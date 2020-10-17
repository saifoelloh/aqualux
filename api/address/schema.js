const Joi = require('joi')
const { join } = require('../../utils/responses/success')

const schema = Joi.object().keys({
    provinsiId: Joi.number().required(),
    kabupatenId: Joi.number().required(),
    kecamatanId:Joi.number().required(),
    kodeposId: Joi.number().required(),
    jalan: Joi.string().required(),
})

module.exports = schema
