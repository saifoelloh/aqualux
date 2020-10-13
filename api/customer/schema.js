const Joi = require('joi')

const schema = Joi.object().keys({
    nama: Joi.string()
             .required(),
    
    telepon: Joi.string()
                .alphanum()
                .min(10)
                .required(),
    
    email: Joi.string()
              .email()
              .required(),
    
    address_id: Joi.number()
                   .integer() 
                   .required(),
})

module.exports = schema
