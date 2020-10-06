const _ = require('lodash')

module.exports = (
    arr=[],
    {sortBy='asc', type='name', show=10, page=0},
) => {
    const temp = _.orderBy(arr, type, sortBy)
    const result = _.chunk(temp, show)[page]
    return{
        total: arr.length,
        data: result,
    }
}