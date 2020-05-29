const Pool = require('pg')

const con = new Pool({
    host: 'ec2-35-174-127-63.compute-1.amazonaws.com',
    database: 'ddqjv2k7k5spa9',
    user: 'mpheqkiiuzxupk',
    password: 'c3b806b8d0885a57f2df39911cf8f442c2422a5902f406e51f7debba1432b5d2',
    port: '5432',
})

module.exports = con