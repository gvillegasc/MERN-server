const bcrypt = require('bcrypt-nodejs');
const User = require('../models/user.model');

module.exports = {
	signUp(req, res, next) {
		const user = new User();
		const { name, lastname, email, password, repeatPassword } = req.body;
		user.name = name;
		user.lastname = lastname;
		user.email = email;
		user.role = 'admin';
		user.active = false;

		if (!password || !repeatPassword) {
			return res
				.status(404)
				.send({ message: 'Las contraseñas son obligatorias' });
		} else {
			if (password !== repeatPassword) {
				return res
					.status(404)
					.send({ message: 'Las contraseñas no son iguales' });
			} else {
				bcrypt.hash(password, null, null, function (err, hash) {
					if (err) {
						return res
							.status(500)
							.send({ message: 'Error al encriptar contraseña' });
					} else {
						user.password = hash;
						user.save((err, userStored) => {
							if (err) {
								return res
									.status(500)
									.send({ message: 'El usuario ya existe' });
							} else {
								if (!userStored) {
									res
										.status(404)
										.send({ message: 'Error al crear el usuario' });
								} else {
									return res.status(200).send({
										user: userStored,
									});
								}
							}
						});
					}
				});
			}
		}
	},
};
