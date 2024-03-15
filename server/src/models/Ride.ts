
// ============================================================================
//                     			User Schema        
// ============================================================================

import mongoose from 'mongoose';
const { Schema, model } = mongoose;
// const bcrypt				= require('bcrypt-nodejs');
// const passportLocalMongoose = require('passport-local-mongoose');

const rideSchema = new Schema({
	rideTitle: 	        String,
	imageUrl: 	        String,
  createdById: 	      String,
  createdByName: 	    String,
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
	rideType: 	      String,
	rideDescription: 	String,
	rideDifficulty:   String,
	dateCreated: {
		type: 		Date,
		required: false
	},
  participants: []
});

// UserSchema.plugin(passportLocalMongoose);
// UserSchema.methods.encryptPassword = function(password) {
	// return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);

// }

const Ride = model('Ride', rideSchema);

export default Ride;
