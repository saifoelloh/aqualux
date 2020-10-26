const errorResponses = require('./error')
const successResponses = require('./success')
const responses = { errorResponses, successResponses }

module.exports = Object.entries(responses).reduce((acc, cur) => {
  acc[cur[0]] = cur[1].reduce((accumulator, current) => {
    accumulator[current['code']] = (
      res,
      { data = null, message = current['message'] },
    ) =>
      res.status(current['code']).json({
        status: {
          message,
          code: current['code'],
          success: current['success'],
        },
        payload: {
          total: data.length,
          data
        },
      })
    return accumulator
  }, {})
  return acc
}, {})
