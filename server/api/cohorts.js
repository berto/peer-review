var express = require('express');
var router = express.Router();
var request = require('request')
var jwt = require('jsonwebtoken');

/**
 * @api {get} /cohort Get Galvanize Cohorts 
 * @apiName GetCohorts
 * @apiGroup Cohorts
 */
router.get('/', function (req, res, next) {
  var token = req.get('Authorization').substring(7);
  var accessToken = jwt.decode(token).accessToken;
  var options = {
    headers: {
      'Authorization': 'Bearer ' + accessToken 
    }
  };
  var url = process.env.MEMBERS_URL + "api/v1/cohorts";
  request(url, options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body).results);
    } else {
      next(error);
    }
  });
});

/**
 * @api {get} /cohort/:id/student Get Galvanize Cohorts 
 * @apiName GetCohorts
 * @apiGroup Cohorts
 */
router.get('/', function (req, res, next) {
  var token = req.get('Authorization').substring(7);
  var accessToken = jwt.decode(token).accessToken;
  var options = {
    headers: {
      'Authorization': 'Bearer ' + accessToken 
    }
  };
  var url = process.env.MEMBERS_URL + "api/v1/cohorts";
  request(url, options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body).results);
    } else {
      next(error);
    }
  });
});

module.exports = router;
