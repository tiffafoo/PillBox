const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicationSchema = new Schema({
	name: String,
	description: String,
	startdate: Date, // Date.now()
	enddate: Date, // stop taking medecine
	waittime: Date, // 30 minute wait or more
	weekly: {
		isweekly: Boolean,
		monday: {
				time: [{type: Date}]
		},
		tuesday: {
			time: [{type: Date}]
		},
		wednesday: {
			time: [{type: Date}]
		},
		thursday: {
			time: [{type: Date}]
		},
		friday: {
			time: [{type: Date}]
		},
		saturday: {
			time: [{type: Date}]
		},
		sunday: {
			time: [{type: Date}]
		}
	},
	interval: {
		time: Date,
		every: Number
	}
});

// expose userSchema
module.exports = mongoose.model('Medication', medicationSchema);
