const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = schema({
	name: String,
	lastname: String,
	email: {
		type: String,
		unique: true,
	},
	password: String,
	role: String,
	active: Boolean,
});

module.exports = mongoose.model('User', UserSchema);
