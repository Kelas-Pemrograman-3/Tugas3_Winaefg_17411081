const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MatkulSchema = new Schema({
    namamk: {
        type: String
    },
    jammk: {
        type: String
    },
    hari: {
        type: String
    },
    ruangan: {
        type: String
    },
    iddosen: {
        type: String
    },
    namadosen: {
        type: String
    }
})

module.exports = mongoose.model('matkul', MatkulSchema)
