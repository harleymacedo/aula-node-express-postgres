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

module.exports = {obterCursos}