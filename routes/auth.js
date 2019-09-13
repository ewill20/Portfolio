const passport = require ('../config/passport/passport.js');

var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){

app.get('/landing', authController.landing);

app.get('/about', authController.about);

app.get('/contact', authController.contact);

// app.get('/signup', authController.signup);

// app.get('/signin', authController.signin);

// app.get('/berlin', authController.berlin);

// app.get('/kyoto', authController.kyoto);

// app.get('/hangzhou', authController.hangzhou);

// app.get('/paris', authController.paris);

// app.get('/popDestinations', authController.popDestinations);

app.get('/home', authController.home);

app.get('/webPort', authController.webPort);

app.get('/experience', authController.experience);

app.get('/education', authController.education);

app.get('/photo', authController.photo);

app.get('/skills', authController.skills);

app.get('/video', authController.video);

app.get('/homeFR', authController.homeFR);

app.get('/aboutFR', authController.aboutFR);

app.get('/contactFR', authController.contactFR);

app.get('/educationFR', authController.educationFR);

app.get('/experienceFR', authController.experienceFR);

app.get('/photoFR', authController.photoFR);

app.get('/skillsFR', authController.skillsFR);

app.get('/videoFR', authController.videoFR);

app.get('/webPortFR', authController.webPortFR);

app.get('/homeDE', authController.homeDE);

app.get('/aboutDE', authController.aboutDE);

app.get('/contactDE', authController.contactDE);

app.get('/educationDE', authController.educationDE);

app.get('/experienceDE', authController.experienceDE);

app.get('/photoDE', authController.photoDE);

app.get('/skillsDE', authController.skillsDE);

app.get('/videoDE', authController.videoDE);

app.get('/webPortDE', authController.webPortDE);

app.get('/homeCN', authController.homeCN);

app.get('/aboutCN', authController.aboutCN);

app.get('/contactCN', authController.contactCN);

app.get('/webPortCN', authController.webPortCN);

app.get('/experienceCN', authController.experienceCN);

app.get('/educationCN', authController.educationCN);

app.get('/photoCN', authController.photoCN);

app.get('/skillsCN', authController.skillsCN);

app.get('/videoCN', authController.videoCN);

app.post('/landing', function(req, res, next) {
    console.log("whatever");
    passport.authenticate('local-signup');
    // passport.authenticate('local-signup', function(err, user, info) {
    //     if (err) {
    //         return next(err); // will generate a 500 error
    //       }
    //     console.log("whatever 2");
    //     console.log(email);
    //     try {
            // res.render('/profile');
    //     }
    //     catch (err) {
    //         console.log(err)
    //         res.redirect('/signup')
    //     }
    // });
});


app.get('/profile',isLoggedIn, authController.profile);


// app.get('/logout',authController.logout);


// app.post('/signin', passport.authenticate('local'),
//     function(req, res) {
//    res.redirect('/profile' + req.user.handle)
// });

    


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}


}