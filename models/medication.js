const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;

const medicationSchema = new Schema({
	name: {type: String, required: true},
	description: {type: String , default: ''},
	startdate: Date, // Date.now()
	enddate: Date,  // stop taking medecine
	waittime: {type: Number, default: 30}, // in minutes, default 60
	weekly: {
		monday:[{type: Number, unique: true}], //1345 ==> 13:45
		tuesday: [{type: Number, unique: true}],
		wednesday: [{type: Number, unique: true}],
		thursday: [{type: Number, unique: true}],
		friday: [{type: Number, unique: true}],
		saturday: [{type: Number, unique: true}],
		sunday: [{type: Number, unique: true}]
	},
	interval: {
		nextintake: Date,
		dayinterval: Number
	}
});

// expose userSchema
module.exports = mongoose.model('Medication', medicationSchema);
