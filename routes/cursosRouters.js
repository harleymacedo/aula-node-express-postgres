const con = require('../models/connection')

async function todos (req, res) {
    try{
        await con.connect()
        await con.query('select id, nome from curso', (error, result) => {
            console.log(result.rows)
            res.render('curso', {cursos: result})
        })
    } catch (error) {
        res.render('home')
    }
}

async function detalhe(req, res) {
    try{
        let id = req.params.id
        await con.connect()
        await con.query("select id, nome, duracao from curso where id = " + id, (error, result) => {
            res.render('cursoDetalhe', {curso: result.rows[0]})
        })
    } catch (error) {
        res.render('home')
    }
}

function novo(req, res) {
    res.render('cursoNovo')
}

async function cadastrar(req, res) {
    try {
        let nome = req.body.nome
        let duracao = req.body.duracao
        console.log(nome + ',' + duracao)
        await con.connect()
        await con.query("insert into curso (nome, duracao) values ('" + nome + "', " + duracao + " )")
        res.redirect('/cursos/novo')
    } catch (error) {
        console.log(error.toString())
        res.render('home')
    }
}

function deletar(req, res) {

}

function atualizar(req, res) {

}

module.exports = {todos, detalhe, novo, cadastrar, deletar, atualizar}