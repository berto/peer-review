var passport = require('passport')
var OAuth2Strategy = require('passport-oauth2')
var request = require('request')
var User = require('../db/queries/members');

passport.use('provider', new OAuth2Strategy({
  authorizationURL: process.env.AUTH_URL,
  tokenURL: process.env.TOKEN_URL,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL
},

function(accessToken, refreshToken, profile, done) {
  var options = {
    headers: {
      'Authorization': 'Bearer ' + accessToken
    }
  };
  request('https://muslin.galvanize.com/api/v2/me', options, function (error, response, body) {
    var userInfo = JSON.parse(body).results[0];
    if (!error && response.statusCode == 200) {
      User.findOne({'email': userInfo.email},function(err, user){
        if(err){
          console.log(err);
        }
        if (!err && user != null) {
          done(null, user);
        } else {
          user = new User({
            name: userInfo.name,
            email: userInfo.email,
            profilePic: userInfo.photo
          });
          user.save(function(err){
            if(err){
              console.log(err);
            } else {
              done(null, user);
            }
          });
        }
      });
    }
  });
}));
// *** end *** //

// serialize and deserialize user (passport)
passport.serializeUser(function(user, done) {
 // console.log('serializeUser: ' + user._id);
 done(null, user._id);
});
passport.deserializeUser(function(id, done) {
 User.findById(id, function(err, user){
   // console.log(user);
   if(!err) done(null, user);
   else done(err, null);
 });
});


module.exports = passport;
