const con = require('../models/connection')

async function todos (req, res) {
    try{
        await con.connect()
        await con.query('select id, nome from curso', (error, result) => {
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
        await con.connect()
        await con.query("insert into curso (nome, duracao) values ('" + nome + "', " + duracao + " )")
        res.redirect('/cursos/todos')
    } catch (error) {
        res.render('home')
    }
}

async function deletar(req, res) {
    try{
        let id = req.body.id
        await con.connect()
        await con.query('delete from curso where id = ' + id)
        res.redirect('/cursos/todos')
    } catch(error) {
        res.render('home')
    }
}

async function atualizar(req, res) {
    try{
        let id = req.body.id
        let novoNome = req.body.nome
        let duracao = req.body.duracao
        console.log(novoNome)
        let sql = "update curso set nome = '" + novoNome + "', duracao = " + duracao + " where id = " + id
        await con.connect()
        await con.query(sql)
        console.log(sql)
        res.redirect('/cursos/todos')
    } catch(error) {
        res.render('home')
    }
}

module.exports = {todos, detalhe, novo, cadastrar, deletar, atualizar}