const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Teste inicial')
})

app.listen(3000, () => {
    console.log('App rodando!')
})