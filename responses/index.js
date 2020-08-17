const successResponses = require('./success')
const errorResponses = require('./error')
const responses = { successResponses, errorResponses }

module.exports = Object.entries(responses).reduce((acc, cur) => {
  acc[cur[0]] = cur[1].reduce((values, value) => {
    values[value['name']] = (payload, message = value['message']) => ({
      status: {
        message,
        code: value['code'],
        success: value['success'],
      },
      payload,
    })
    return values
  }, {})
  return acc
}, {})
