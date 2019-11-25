const matkulModel = require('../models/MatkulModel')

exports.insertMatkul = (data) =>
    new Promise((resolve, reject) => {
        matkulModel.create(data)
        .then(res => {
            resolve({
                error: false,
                pesan: 'Berhasil Input Matkul'
            })
        })
        .catch(() => {
            reject({
                error: true,
                pesan: 'Gagal Input Matkul'
            })
        })
    })