const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    username: {
	type: String,
	trim: true,
	required: true,	
    },
    hash: {
    	type: String
    },
    salt: {
	type: String
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User
