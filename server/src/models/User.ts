
// ============================================================================
//                     			User Schema        
// ============================================================================

import mongoose from 'mongoose';
const { Schema, model } = mongoose;
// const bcrypt				= require('bcrypt-nodejs');
// const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
	id: 				String,
	userName: 	String,
	password: {
		type: String,
		required: true
	},
	imageUrl: 	String, 
	firstName: 	String,
	lastName: 	String,
	address: 		String,
	address2: 	String,
	city: 			String,
	state: 			String,
	zipcode: 		Number,
	email: {
		type: String,
		required: true
	},
	phoneNum: 	Number,
	notify:			Boolean,
	radius: 		Number,
	coordinates: {
		lat: Number,
		lng: Number
	},
	rideType: 	{
		road: 		Boolean,
		mountain: Boolean,
		other: 		Boolean
	},
	rideDifficulty: {
		easy: 		Boolean,
		medium: 	Boolean,
		hard: 		Boolean
	},
	dateCreated: {
		type: 		Date,
		required: false
	}
});

// UserSchema.plugin(passportLocalMongoose);
// UserSchema.methods.encryptPassword = function(password) {
	// return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);

// }

const User = model('User', userSchema);

export default User;
