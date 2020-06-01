const con = require('../models/connection')

async function obterCursos (req, res) {
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

async function detalheCurso(req, res) {
    try{
        await con.connect()
        await con.query('select id, nome, duracao from curso where id = 1', (error, result) => {
            console.log(result.rows)
            console.log(result.rows[0].id)
            res.render('cursoDetalhe', {curso: result.rows[0]})
        })
    } catch (error) {
        res.render('home')
    }
}

module.exports = {obterCursos, detalheCurso}