const passport = require ('../config/passport/passport.js');

var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){

app.get('/home', authController.home);

app.get('/about', authController.about);

app.get('/contact', authController.contact);

app.get('/webPort', authController.webPort);

app.get('/video', authController.video);

app.get('/photo', authController.photo);


app.post('/main', function(req, res, next) {
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