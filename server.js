// Here we are requiring all the various dependencies//
var http = require('http')
var express = require('express')
var app = express()
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load()
// var customEnv = require('env');
var exphbs = require('express-handlebars')
var path = require('path')
// var fs = require('fs')
var mysql = require('mysql')
var db = require("./models")


// For Passport
 // Serving up static assets //
 app.use(express.static("public"));

 app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 app.use(passport.initialize());
 app.use(passport.session()); // persistent login sessions

var PORT = app.listen(process.env.PORT) || 5000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// // Static directory
// app.use(express.static("public"));

// For Handlebars //
app.set('views', './views');
app.engine('hbs', exphbs({extname: '.hbs',defaultLayout: 'main'}));
app.set('view engine', '.hbs');

app.get('/', function(req, res) {
    res.render('home');
});
// app.get('/profile', function(req, res) {
//     console.log(req.params.user);
//     res.render('profile');
// });

//load passport strategies
require('./config/passport/passport.js')(passport, db.user);

//Routes
// var authRoute = require('./routes/auth.js')(app,passport);
// require("./routes/api-routes.js")(app);
// require("./routes/user-api-routes.js")(app);

//Models
    var models = require("./models");

app.get('/', function(req, res) {

    res.send('Welcome')

    res.render(path.join(__dirname, 'home.hbs'))
});
app.get('/about', function(req, res) {
    res.render(path.join(__dirname, "about.hbs"))
});
app.get('/contact', function(req, res) {
    res.render(path.join(__dirname, "contact.hbs"))
});
app.get('/video', function(req, res) {
    res.render(path.join(__dirname, "video.hbs"))
});
app.get('/skills', function(req, res) {
    res.render(path.join(__dirname, "skills.hbs"))
});
app.get('/education', function(req, res) {
    res.render(path.join(__dirname, "education.hbs"))
});
app.get('/experience', function(req, res) {
    res.render(path.join(__dirname, "experience.hbs"))
});
app.get('/photo', function(req, res) {
    res.render(path.join(__dirname, "photo.hbs"))
});
app.get('/webPort', function(req, res) {
    res.render(path.join(__dirname, "webPort.hbs"))
});

// ROUTER
// This points our server in the right direction via a series of "routes" //
// =======================================================================//
// Function to handle requests and responses //
var env = require('dotenv').load();
var envConfig = require('dotenv').config();

//Sync Database
db.sequelize.sync({force: false}).then(function() {


    app.listen(PORT, function(err) {
        if (!err)
            console.log("Site is live");
        else console.log(err)
            console.log('Nice! Database looks fine')
    });


}).catch(function(err) {

    console.log(err, "Something went wrong with the Database Update!")

});

