const mongoose = require('mongoose')
const Schema = mongoose.Schema


const combosSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    tags: {
        type: String,
        required: true
    },
    bebidas: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    })
    //,
    //comments: [commentSchema]
    //}, {
    //timestamps: true
const Combos = mongoose.model('Combos', combosSchema)

module.exports = Combos
//mongod.exe --dbpath="c:\data\db"