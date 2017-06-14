const cors = require('cors');
const express = require('express');
//const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');

// INITIATE EXPRESS APP & SET LISTENING PORT ================
const app = express();
const port = 3030;

// MIDDLEWARE FOR EVERYTHING TO PASS THROUGH ================
app.use(bodyParser.json());
app.use(express.static(`${__dirname}./../public`));
app.use(cors());
//app.use(session({
//	secret: process.env.SESSION_SECRET,
//	saveUninitialized: false,
//	resave: false
//}));
//app.use(passport.initialize());
//app.use(passport.session());

//// MASSIVE DB ==========================================



// POST ENDPOINTS ==========================
app.post('/api/create-user', (req, res, next) => {
	console.log(req.body)
})


// LISTENING ON PORT ===============================
app.listen(port, () => {
	console.log(`fullstack is watching you on port: ${port}`)
})