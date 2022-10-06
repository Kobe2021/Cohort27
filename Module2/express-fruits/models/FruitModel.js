// Import Mongoose
const mongoose = require('mongoose')

// Create a new Schema
const fruitSchema = new mongoose.Schema({
    name: {type: String, require: true},
    color: {type: String, require: true},
    readyToEat: Boolean
})

// Create new model within the schema
const Fruit = mongoose.model('Fruit', fruitSchema)

module.exports = Fruit