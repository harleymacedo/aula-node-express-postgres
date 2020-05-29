const con = require('../models/connection')

async function obterAlunos(req, res) {
    await con.connect()
    await con.query('select matricula, nome from aluno', (error, result) => {
        res.render('aluno', {alunos: result})
    })
}

module.exports = obterAlunos