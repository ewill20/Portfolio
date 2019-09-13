
var exports = module.exports = {}

exports.main = function (req,res) {

  res.render('main');
  
}
exports.landing = function(req,res){

	res.render('landing'); 

}
exports.about = function(req,res) {

  res.render('about');

}
exports.berlin = function(req,res) {

  res.render('berlin');

}
exports.popDestinations = function(req, res) {

  res.render('popDestinations');
  
}
exports.kyoto = function(req, res) {

  res.render('kyoto');

}
exports.paris = function(req, res) {

  res.render('paris');

}
exports.hangzhou = function(req, res) {
  
  res.render('hangzhou');
  
}
exports.contact = function(req,res) {

  res.render('contact');

}
exports.signup = function(req,res){
  
    res.render('signup'); 
  
}
exports.signin = function(req,res){

	res.render('signin'); 

}
exports.profile = function(req,res){

	res.render('profile'); 

}
exports.home = function(req,res){

  res.render('home'); 

}

exports.webPort = function(req,res){

  res.render('webPort'); 

}

exports.experience = function(req,res){

  res.render('experience'); 

}

exports.education = function(req,res){

  res.render('education'); 

}

exports.photo = function(req,res){

  res.render('photo'); 

}

exports.skills = function(req,res){

  res.render('skills'); 

}

exports.video = function(req,res){

  res.render('video'); 

}

exports.homeFR = function(req,res){

  res.render('homeFR');

}

exports.aboutFR = function(req,res){

  res.render('aboutFR');
  
}

exports.contactFR = function(req,res){

  res.render('contactFR');
  
}

exports.educationFR = function(req,res){

  res.render('educationFR');
  
}

exports.experienceFR = function(req,res){

  res.render('experienceFR');
  
}

exports.photoFR = function(req,res){

  res.render('photoFR');
  
}

exports.skillsFR = function(req,res){

  res.render('skillsFR');
  
}

exports.videoFR = function(req,res){

  res.render('videoFR');
  
}

exports.webPortFR = function(req,res){

  res.render('webPortFR');
  
}

exports.homeDE = function(req,res){

  res.render('homeDE');
  
}

exports.aboutDE = function(req,res){

  res.render('aboutDE');
  
}

exports.contactDE = function(req,res){

  res.render('contactDE');
  
}

exports.educationDE = function(req,res){

  res.render('educationDE');
  
}

exports.experienceDE = function(req,res){

  res.render('experienceDE');
  
}

exports.photoDE = function(req,res){

  res.render('photoDE');
  
}

exports.skillsDE = function(req,res){

  res.render('skillsDE');
  
}

exports.videoDE = function(req,res){

  res.render('videoDE');
  
}

exports.webPortDE = function(req,res){

  res.render('webPortDE');
  
}

exports.homeCN = function(req,res){

  res.render('homeCN');
  
}

exports.aboutCN = function(req,res){

  res.render('aboutCN');
  
}

exports.contactCN = function(req,res){

  res.render('contactCN');
  
}

exports.educationCN = function(req,res){

  res.render('educationCN');
  
}

exports.experienceCN = function(req,res){

  res.render('experienceCN');
  
}

exports.photoCN = function(req,res){

  res.render('photoCN');
  
}

exports.skillsCN = function(req,res){

  res.render('skillsCN');
  
}

exports.videoCN = function(req,res){

  res.render('videoCN');
  
}

exports.webPortCN = function(req,res){

  res.render('webPortCN');
  
}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/landing');
  });

}