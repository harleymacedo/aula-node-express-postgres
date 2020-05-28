const express = require('express')
const app = express()
const handleBars = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

//engine view
app.engine('handlebars', handleBars({defaultLayout: 'main'}))

//sets
app.set('view engine', 'handlebars')

//uses
app.use(express.static(__dirname + '/public'))
app.use(methodOverride('_method', {methods: ['GET', 'POST', 'PUT', 'DELETE']} ))
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('App rodando!')
})