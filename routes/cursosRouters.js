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
        await con.connect()
        await con.query('select id, nome, duracao from curso where id = 1', (error, result) => {
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
        await con.connect()
        await con.query("insert into curso (nome, duracao) values ('Novo curso', 60)")
        res.redirect('/home')
    } catch (error) {
        render('home')
    }
}

function deletar(req, res) {

}

function atualizar(req, res) {

}

module.exports = {todos, detalhe, novo, cadastrar, deletar, atualizar}