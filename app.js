const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nohup = require('child_process').exec;
require('dotenv').config();

const app = express();
var server = app.listen(8081);
app.io = require('socket.io')(server);
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
app.set('socketio', app.io);

app.io.on('connection', function(socket){
    console.log("connected!");

    socket.on('disconnect', function(socket){
        console.log("disconnected!");
    });

    socket.on('message', function(msg) {
			const message = JSON.parse(msg);
				if ( Object.prototype.toString.call(message) ===  '[object Array]') {
					console.log(message);
					// console.log(message.concepts.medication);
					// console.log(message.concepts.hour);
				} else {
					console.log('Object!');
				}
				// console.log(msg.payload);
    });
});

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

function notify(medicationName) {

	if (medicationName === undefined || medicationName === '') {
		medicationName = 'Marvelon';
	}
	const command = 'osascript -e \'display notification "Yes\t\tSkip\t\tReschedule" with title "Did you take '+ medicationName + '"\'';
	nohup(command, {silent: true});
	const say = 'say -v Samantha Please take ' + medicationName;
	console.log(say);
	nohup(say, {silent: true});

}

// GET: get hello world response
app.get('/', (req, res) => {
	res.send('Hello World!!');
});

// GET: nuance
app.get('/api/nuance', (req, res) => {
    app.io.sockets.emit('record');
    res.send("Started recording!");
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

// GET: retrieve medications of day and hour now.
// app.get('/api/medications', (req, res) => {
// 	Medication.findOne({ weekly.monday: req.body.name }, (err, doc) => {
// 		if (err) {
// 			handleError(res, err.message, 'Failed to update user');
// 		} else {
// 			doc.interval.nextintake = moment(doc.interval.nextintake).add(doc.interval.dayinterval, 'days');
// 		}
// 	});
// });

// PUT: Update nextIntake date
app.put('/api/medications', (req, res) => {

	Medication.findOne({ name: req.body.name }, (err, doc) => {
		if (err) {
			handleError(res, err.message, 'Failed to update user');
		} else {
			doc.interval.nextintake = moment(doc.interval.nextintake).add(doc.interval.dayinterval, 'days');
		}
	});
});

// GET voice
app.get('/record', (req,res) => {
	const command = 'nohup python nlu.py';
	nohup(command, {silent: true});
});

// GET voice
app.get('/stop', (req,res) => {
	const command = 'ps -edf | grep "nlu.py" | awk \'{print $2}\' | xargs -I {} kill -9 {}';
	nohup(command, {silent: true});
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
	console.log(moment().add(Number(param.dayinterval), 'days'));
	if (param.dayinterval === undefined) {
		newMedication.interval.dayinterval = -1;
		// newMedication.interval.nextintake = moment().substract(1, 'years');
	} else {
		newMedication.interval.dayinterval = param.dayinterval;
		newMedication.interval.nextintake = moment().add(Number(param.dayinterval), 'days');
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
	// setInterval(function(){ notify(); }, 3000);
	setInterval(function(){ notify(); }, 3600000);
});

function validateBody(body) {
	if (body === undefined || body === '') {
		return [];
	}
	return JSON.parse(body);
}
