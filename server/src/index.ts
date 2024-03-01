
//=============================================================================
//								Main Server File
//=============================================================================

import * as dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import morgan from 'morgan';
import mongoose from 'mongoose';

	  // passport				= require('passport'),
	  // cookieParser			= require('cookie-parser'),
	  // LocalStrategy 		= require('passport-local').Strategy,
	  // passportLocalMongoose = require('passport-local-mongoose'),
	  // session				= require('express-session'),
	  // path                  = require('path'),
	  // keys					= require('./config/prod');

import User from './models/User';

const app = express();

const logger = morgan;

const PORT = process.env.PORT || 4000;

if (process.env.MONGODB_DEV_URI) {
	const db: string = process.env.MONGODB_DEV_URI || "mongodb://localhost/ridematesv3";
	mongoose.connect(db)
		.then(() => {
			console.log("\n***** mongoose connection is successful *****\n");
		})
		.catch(error => { throw error });
}
else console.log('\n----------------  no connection to MongoDB\n');

// // Priority serve any static files.
// app.use(express.static(path.resolve(__dirname, './client/build')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieSession({ keys: ['adsflf'] }));

app.use(router);

// app.use(express.static('public'));

// app.use(cookieParser());

app.use(logger('dev'));

// // Passport configuration
// app.use(session({
// 	secret: "AC Torino is the best team in the world",
// 	resave: false,
// 	saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// //enable CORS
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   next();
// });

// // Routes
// const htmlRoutes = require("./controllers/htmlController.js");
// const authRoutes = require("./controllers/authController.js");
// const requestRoutes = require("./controllers/requestController.js");
// const resultsRoutes = require("./controllers/resultsController.js");
import profileRoutes from "./controllers/userController";
import ridesRoutes from "./controllers/ridesController";


app.use("/api/user", profileRoutes);
app.use("/api/ride", ridesRoutes);
// app.use("/api/request", requestRoutes);
// app.use("/api/results", resultsRoutes);

// app.get('/api/user', function(request, response) {
//   response.send(`<h1>ciao</h1`);
// });

// TODO: TEST ONLY - REMOVE WHEN DONE
// const user = new User({
// 	firstName: 'Bob',
// 	lastName: 'Bobbinson'
// });

// user.save();
// END TODO

// Start the server
app.listen(PORT, function() {
	console.log('\n==================================================================');
  console.log(`Now listening on port ${PORT}! Visit localhost:${PORT} in your browser.`);
	console.log('==================================================================');
});
