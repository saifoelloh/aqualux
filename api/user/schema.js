const Joi = require('joi')

const schema = Joi.object().keys({
  nama: Joi.string().required(),
  jabatan: Joi.string().required(),
  telepon: Joi.string().alphanum().min(10).required(),
  email: Joi.string().email().required(),
  addressesId: Joi.number().integer().required(),
})

module.exports = schema
