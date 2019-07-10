
var exports = module.exports = {}

exports.main = function (req,res) {

  res.render('main');
  
}
exports.home = function(req,res){

	res.render('home'); 

}
exports.about = function(req,res) {

  res.render('about');

}
exports.contact = function(req,res) {

  res.render('contact');

}
exports.education = function(req, res) {

  res.render('education');
  
}
exports.experience = function(req, res) {

  res.render('experience');

}
exports.skills = function(req, res) {

  res.render('skills');

}
exports.webPort = function(req, res) {
  
  res.render('webPort');
  
}
exports.photo = function(req,res) {

  res.render('photo');

}
exports.video = function(req,res){
  
    res.render('video'); 
  
}


// exports.logout = function(req,res){

//   req.session.destroy(function(err) {
//   res.redirect('/home');
//   });

// }