const Pool = require('pg')
const url = 'postgres://mpheqkiiuzxupk:c3b806b8d0885a57f2df39911cf8f442c2422a5902f406e51f7debba1432b5d2@ec2-35-174-127-63.compute-1.amazonaws.com:5432/ddqjv2k7k5spa9'

const con = new Pool({
    connectionString: url
})

module.exports = con