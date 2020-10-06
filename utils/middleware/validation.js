const {errorResponses} = require('../responses')

module.exports = (schema) => {
    return(req, res, next) => {
        const { error } = schema.validate(req.body)
        if(error===undefined){
            next()
        }else{
            return errorResponses[422](res, {
                message: error.details.map((i) => i.message).join('; '),
            })
        }
    }
}