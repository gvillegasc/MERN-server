const bcrypt = require('bcrypt-nodejs');
const User = require('../models/user.model');

function signUp(req, res) {
	console.log('EndPoiny de SignUp');
}

module.exports = {
	signUp,
};
