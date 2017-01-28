const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicationSchema = new Schema({
	name: String,
	description: String,
	startdate: Date, // Date.now()
	enddate: Date, // stop taking medecine
	waittime: Number, // in minutes, default 60
	weekly: {
		isweekly: Boolean,
		monday: {
				time: [{type: Number, unique: true}] //1345 ==> 13:45
		},
		tuesday: {
			time: [{type: Number, unique: true}]
		},
		wednesday: {
			time: [{type: Number, unique: true}]
		},
		thursday: {
			time: [{type: Number, unique: true}]
		},
		friday: {
			time: [{type: Number, unique: true}]
		},
		saturday: {
			time: [{type: Number, unique: true}]
		},
		sunday: {
			time: [{type: Number, unique: true}]
		}
	},
	interval: {
		day: Date,
		dayInterval: Number
	}
});

// expose userSchema
module.exports = mongoose.model('Medication', medicationSchema);
