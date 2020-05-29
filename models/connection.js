const Pool = require('pg')
const url = process.env.DATABASE_URL

const con = new Pool({
    connectionString: url
})

module.exports = con