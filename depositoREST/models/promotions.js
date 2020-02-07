const mongoose = require('mongoose')
const Schema = mongoose.Schema


const promotionsSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    tags: {
        type: String,
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

const Promotions = mongoose.model('Promotions', promotionsSchema)

module.exports = Promotions
//mongod.exe --dbpath="c:\data\db"