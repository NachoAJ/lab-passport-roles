const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
	{
		username: String,
		password: String,
		role: {
			type: String,
			enum: ['BOSS', 'DEVELOPER', 'TA'],
			default: 'DEVELOPER'
		}
	},
	{
		timestamps: true
	}
)

const User = mongoose.model('User', userSchema)

module.exports = User
