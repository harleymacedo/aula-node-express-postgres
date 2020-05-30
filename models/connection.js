const {Pool, Client} = require('pg')
const url = process.env.DATABASE_URL

const con = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: 'escola',
})

module.exports = con