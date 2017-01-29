const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
require('dotenv').config();

const app = express();
const MONGODB_URI = process.env.MONGO_KEY;

// models
const Medication = require('./models/medication');

// stops deprecation warnings & misuse
mongoose.Promise = global.Promise;

// connect to database
mongoose.connect(MONGODB_URI);

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

// GET: retrieve all medications
app.get('/api/medications', (req, res) => {
	Medication.find({})
	.select('-__v')
	.lean()
	.exec((err, docs) => {
		if (err) {
			handleError(res, err.message, 'Failed to get medications');
		} else {
			res.status(200).json(docs);
		}
	});
});

// POST: create a new medicine
app.post('/api/medications', (req, res) => {
	const newMedication = new Medication();
	const param = req.body;
	newMedication.name = param.name;
	newMedication.description = param.description;
	newMedication.startdate = moment();
	if (param.enddate === undefined) {
		newMedication.enddate = moment().add(7, 'months');
	} else {
			newMedication.enddate = param.enddate;
	}
	newMedication.waittime = param.waittime;
	newMedication.weekly.monday = validateBody(param.monday);
	newMedication.weekly.tuesday = validateBody(param.tuesday);
	newMedication.weekly.wednesday = validateBody(param.wednesday);
	newMedication.weekly.thursday = validateBody(param.thursday);
	newMedication.weekly.friday = validateBody(param.friday);
	newMedication.weekly.saturday = validateBody(param.saturday);
	newMedication.weekly.sunday = validateBody(param.sunday);
	if (param.dayInterval === undefined) {
		newMedication.interval.dayInterval = -1;
	} else {
		newMedication.interval.dayInterval = param.dayInterval;
	}
	console.log(newMedication);
	Medication.create(newMedication, (err, doc) => {
		if (err) {
			handleError(res, err.message, 'Failed to add medication');
		} else {
			res.status(201).json(doc);
		}
	});
});

app.delete('/api/medications', (req, res) => {
		Medication.find({ _id: req.body.id})
		.remove()
		.exec((err, docs) => {
			if (err) {
				handleError(res, err.message, 'Failed to delete medication');
			} else {
				res.status(200).json(docs);
			}
		});
	});


app.listen(app.get('port'), () => {
	console.log('Node app is running at localhost:' + app.get('port'));
});

function validateBody(body) {
	if (body === undefined || body === '') {
		return [];
	}
	return JSON.parse(body);
}
