const mongoose = require('mongoose')
const Schema = mongoose.Schema


const bebidasSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
    })
    
const Bebidas = mongoose.model('Bebidas', bebidasSchema)

module.exports = Bebidas
//mongod.exe --dbpath="c:\data\db"