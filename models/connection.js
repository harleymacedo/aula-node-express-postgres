const Pool = require('pg')
const url = process.env.URL_BANCO

const con = new Pool({
    connectionString: url
})

module.exports = con