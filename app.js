const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser');

const app = express();

// this will let us get data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set port
app.set('port', (process.env.PORT || 8080));

app.use((req, res, next) => {
	// logging
	console.log(moment().format('MM-DD-YYYY, hh:mm:ss') + '-- ' + req.method + ': ' + req.originalUrl);
	next();
});

// Error handler for the api
function handleError(res, reason, message, code) {
	console.log('API Error: ' + reason);
	res.status(code || 500).json({ Error: message });
}

// GET: get hello world response
app.get('/', (req, res) => {
	res.send('Hello World!!');
});

app.listen(app.get('port'), () => {
	console.log('Node app is running at localhost:' + app.get('port'));
});
