
// ============================================================================
//                     			User Schema        
// ============================================================================

import mongoose from 'mongoose';
const { Schema, model } = mongoose;
// const bcrypt				= require('bcrypt-nodejs');
// const passportLocalMongoose = require('passport-local-mongoose');

const rideSchema = new Schema({
	rideName: 	        String,
	imageUrl: 	        String, 
  map:                Object,
	startingAddress: {
    city: 			String,
    state: 			String,
    zipcode: 		Number,
    email: 			String,
    phoneNum: 	Number,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
	rideType: 	    Number,
	rideDifficulty: Number,
	dateCreated: {
		type: 		Date,
		required: false
	}
});

// UserSchema.plugin(passportLocalMongoose);
// UserSchema.methods.encryptPassword = function(password) {
	// return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);

// }

const Ride = model('Ride', rideSchema);

export default Ride;
