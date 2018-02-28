const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: { type: String, required: true }, 
	wins: { type: Number, default: 0}
})

const User = mongoose.model('User', userSchema);

module.exports = User; 