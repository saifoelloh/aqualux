module.exports = [
    {
      name: 'error',
      code: 400,
      success: false,
      message: 'Error',
    },
    {
      name: 'not found',
      code: 404,
      success: false,
      message:
        'The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.',
    },
    {
      name: 'unprocessable entity',
      code: 422,
      success: false,
      message:
        'The request was well-formed but was unable to be followed due to semantic errors.',
    },
  ]
  