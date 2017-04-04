var express = require('express');
var router = express.Router();
var request = require('request')
var jwt = require('jsonwebtoken');
var Team = require('../../db/queries/teams');
var Member = require('../../db/queries/members');

/**
 * @api {get} /cohort Get Galvanize Cohorts 
 * @apiName GetCohorts
 * @apiGroup Cohorts
 */
router.get('/', function (req, res, next) {
  var options = generateTokenOptions(req);
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
 * @api {post} /cohort Post Galvanize Cohort
 * @apiName CreateCohort
 * @apiGroup Cohorts
 */
router.post('/', function (req, res, next) {
  var options = generateTokenOptions(req);
  request(req.body.url, options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result = JSON.parse(body).results[0];
      Team.create(result.label).then(function (id) {
        var requests = result.students.reduce(function (list, student) {
          if (student.name) {
            list.push(Member.create(id[0], student.name));
          }
          return list;
        }, []);
        Promise.all(requests).then(function () {
          res.json({id: id[0], name: result.label});
        }).catch(function (error) {
          next(error);
        });
      });
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
  var options = generateTokenOptions(req);
  var url = process.env.MEMBERS_URL + "api/v1/cohorts";
  request(url, options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body).results);
    } else {
      next(error);
    }
  });
});

function generateTokenOptions(request) {
  var token = request.get('Authorization').substring(7);
  var accessToken = jwt.decode(token).accessToken;
  return {
    headers: {
      'Authorization': 'Bearer ' + accessToken 
    }
  };
}

module.exports = router;
