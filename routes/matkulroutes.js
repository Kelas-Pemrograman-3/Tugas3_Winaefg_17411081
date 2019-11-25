const matkul = require('express')()
const matkulController = require('../controller/matkulcontroller')

matkul.post('/insert', (req,res) => {
    matkulController.insertMatkul(req.body)
    .then(result => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = matkul