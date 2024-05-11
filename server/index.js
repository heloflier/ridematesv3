"use strict";
//=============================================================================
//								Main Server File
//=============================================================================
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as dotenv from 'dotenv';
// dotenv.config();
const dotenv_safe_1 = require("dotenv-safe");
(0, dotenv_safe_1.config)();
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
// cookieParser			= require('cookie-parser'),
// LocalStrategy 		= require('passport-local').Strategy,
// passportLocalMongoose = require('passport-local-mongoose'),
// session				= require('express-session'),
// path                  = require('path'),
// keys					= require('./config/prod');
const app = (0, express_1.default)();
const logger = morgan_1.default;
const PORT = process.env.PORT || 4000;
if (process.env.MONGODB_DEV_URI) {
    const db = process.env.MONGODB_DEV_URI || "mongodb://localhost/ridematesv3";
    mongoose_1.default.connect(db)
        .then(() => {
        console.log("\n***** mongoose connection is successful *****\n");
    })
        .catch(error => { throw error; });
}
else
    console.log('\n----------------  no connection to MongoDB\n');
// // Priority serve any static files.
// app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cookie_session_1.default)({ keys: ['adsflf'] }));
app.use(authRoutes_1.default);
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
const userController_1 = __importDefault(require("./controllers/userController"));
const ridesController_1 = __importDefault(require("./controllers/ridesController"));
const authRoutes_2 = __importDefault(require("./routes/authRoutes"));
app.use("/api/user", userController_1.default);
app.use("/api/ride", ridesController_1.default);
app.use("/api", authRoutes_2.default);
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
app.listen(PORT, function () {
    console.log('\n==================================================================');
    console.log(`Now listening on port ${PORT}! Visit localhost:${PORT} in your browser.`);
    console.log('==================================================================');
});
