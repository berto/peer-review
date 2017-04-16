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

router.get('/validate', validate, function (req, res, next) {
  res.json({isValid: true});
});

router.get('/github/callback', function (req, res, next) {
  passport.authenticate('galvanize', function(err, user){
    jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1d' }, function(err, token) {
      res.redirect('/loading?token=' + token);
    });
  })(req, res, next);
});

function validate(req, res, next) {
  var authorization = req.get('Authorization');
  var error = new Error("Invalid Token");
  error.status = 498;
  if (authorization) {
    var token = authorization.substring(7);
    jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
      if (err) {
        next(error);
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  } else {
    next(error);
  }
};

function authenticate(req, res, next) {
  var authorization = req.get('Authorization');
  var token = authorization.substring(7);
  var error = new Error("Unauthorized");
  error.status = 401;
  var isAdmin = jwt.decode(token).companies.some(function (companies) {
    return companies.name === "Galvanize";
  });
  if (isAdmin) {
    next();
  } else {
    next(error);
  }
};

module.exports = {
  router: router,
  authenticate: authenticate,
  validate: validate
}
