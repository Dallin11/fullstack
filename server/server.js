const cors = require('cors');
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');

// INITIATE EXPRESS APP & SET LISTENING PORT ================
const app = express();
const port = 3030;

// MIDDLEWARE FOR EVERYTHING TO PASS THROUGH ================
app.use(bodyParser.json());
app.use(express.static(`${__dirname}./../public`));
app.use(cors());

//// MASSIVE DB ==========================================
massive({
	host: 'localhost',
	port: 5432,
	database: 'postgres',
	user: 'postgres',
	password: ''
}).then(db => {
	app.set('db', db);
});


// POST ENDPOINTS ==========================
app.post('/api/create-user', (req, res, next) => {
	const { firstname, lastname, email, password } = req.body

	req.app.get('db').createUser([ firstname, lastname, email, password]).then(res => {
		console.log(res)
	})
})

app.post('/api/login-user', (req, res, next) =>{
	const { email, password } = req.body;
	req.app.get('db').loginUser([email, password]).then(response => {
		//delete response.password;
		console.log(response)
		if(response.length > 0) {
			res.status(200).send(response)
		} else {
			res.status(404).send('User Not Found')
		}
	});
})




// LISTENING ON PORT ===============================
app.listen(port, () => {
	console.log(`fullstack is watching you on port: ${port}`)
})