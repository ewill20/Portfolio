// Here we are requiring all the various dependencies//
var http = require('http')
const express = require('express')
var app = express()
var passport = require('passport')
var session = require('express-session')
var env = require('dotenv').load()
var exphbs = require('express-handlebars')
const path = require('path')
const mysql = require('mysql')
var db = require("./models")

var PORT = process.env.Port || 5000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));



// For Handlebars //
	app.set('views', './views');
	app.engine('hbs', exphbs({extname: '.hbs', defaultLayout: 'main'}));
	app.set('view engine', '.hbs');

	app.get('/', function(req, res){
		res.render('landing');
	});
	app.get('/profile', function(req, res) {
		console.log(req.params.user);
		res.render('profile');
	});


	app.get('/', function(req, res){

		res.send('Welcome')

		res.render(path.join(__dirname, 'landing.hbs'))
	});
	app.get('/about', function(req, res) {
  res.render(path.join(__dirname, "about.hbs"))
});app.get('/contact', function(req, res) {
  res.render(path.join(__dirname, "contact.hbs"))
});app.get('/signin', function(req, res) {
  res.render(path.join(__dirname, "signin.hbs"))
});app.get('/signup', function(req, res) {
  res.render(path.join(__dirname, "signup.hbs"))
});app.get('/profile', function(req,res) {
  res.render(path.join(__dirname, "profile.hbs"))
});


// ROUTER
// This points our server in the right direction via a series of "routes" //
// =======================================================================//
// Function to handle requests and responses //
var env = require('dotenv').load();
 
//Sync Database
db.sequelize.sync({ force:false }).then(function() {

app.listen(PORT, function(err){
    if(!err)
    console.log("Site is live"); else console.log(err)
  console.log('Nice! Database looks fine')
  }); 
    
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});




