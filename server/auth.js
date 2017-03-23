var passport = require('passport')
var OAuth2Strategy = require('passport-oauth2')
var request = require('request')

passport.use('provider', new OAuth2Strategy({
  authorizationURL: process.env.AUTH_URL,
  tokenURL: process.env.TOKEN_URL,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL
}, verifyCallback));

function verifyCallback(accessToken, refreshToken, profile, done) {
  var options = {
    headers: {
      'Authorization': 'Bearer ' + accessToken
    }
  };
  console.log('passport info: ', accessToken, profile);
  request(process.env.USER_INFO_URL, options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var userInfo = JSON.parse(body).results[0];
      profile.info = userInfo;
      done(null, profile); 
    } else {
      done(error, null);
    }
  });
};

passport.serializeUser(function(user, done) {
  console.log('serializeUser: ' + user._id);
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  console.log('serializeUser: ' + id);
  done(null, id);
});

module.exports = passport;
