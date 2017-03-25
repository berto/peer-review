var express = require('express');
var router = express.Router();
var passport = require('./passport');
var jwt = require('jsonwebtoken');

router.use(passport.initialize());

/**
 * @api {get} /auth Login Through Galvanize's SSO
 * @apiName Login
 * @apiGroup Auth
 */
router.get('/', passport.authenticate('galvanize'));

router.get('/github/callback', function (req, res, next) {
  passport.authenticate('galvanize', function(err, user){
    jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1d' }, function(err, token) {
      res.redirect('/loading?token=' + token);
    });
  })(req, res, next);
});

module.exports = router;
