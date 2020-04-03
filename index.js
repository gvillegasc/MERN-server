const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require('./config');

mongoose.connect(
	`mongodb://${IP_SERVER}:${PORT_DB}/mern2`,
	{ useNewUrlParser: true },
	(err, res) => {
		if (err) {
			throw err;
		} else {
			console.log('La conexxion a la base de datos es correct');
			app.listen(port, () => {
				console.log('##########################');
				console.log('######## API REST ########');
				console.log('##########################');
				console.log(`http:///${IP_SERVER}:${PORT_DB}/api/${API_VERSION}/`);
			});
		}
	}
);
