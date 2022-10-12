// username string required
// email string required
// password string required

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},    
}, {timestamps: {createdAt: 'created_at'}})


module.exports = mongoose.model('User', userSchema)