const mongoose = require('mongoose')
const Schema = mongoose.Schema

// quando colocar no POSTMAN, colocar o JSON igual o Schema
const bebidasSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    }
    })
    
const Bebidas = mongoose.model('Bebidas', bebidasSchema)

module.exports = Bebidas
//mongod.exe --dbpath="c:\data\db"