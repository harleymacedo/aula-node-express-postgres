const express = require('express')
const app = express()
const handleBars = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cursosRouters = require('./routes/cursosRouters')

//engine view
app.engine('handlebars', handleBars({defaultLayout: 'main'}))

//sets
app.set('view engine', 'handlebars')

//uses
app.use(express.static(__dirname + '/public'))
app.use(methodOverride('_method', {methods: ['GET', 'POST', 'PUT', 'DELETE']} ))
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(bodyParser.urlencoded({extended: false}))

//Rota home
app.get('/home', (req, res) => {res.render('home')})

//Rotas Cursos
app.get('/cursos/todos', cursosRouters.todos)
app.get('/cursos/detalhe/:id', cursosRouters.detalhe)
app.get('/cursos/novo', cursosRouters.novo)
app.post('/cursos/cadastrar', cursosRouters.cadastrar)
app.delete('/cursos/deletar', cursosRouters.deletar)
app.put('/cursos/atualizar', cursosRouters.atualizar)

var porta = process.env.PORT || 3000
app.listen(porta, () => {
    console.log('App rodando na porta: ' + porta)
})