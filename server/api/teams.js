var express = require('express');
var router = express.Router();
var Team = require('../../db/queries/teams');
var Member = require('../../db/queries/members');
var Survey = require('../../db/queries/surveys');

/**
 * @api {get} /team Request Team Information
 * @apiName GetTeams
 * @apiGroup Team
 */
router.get('/', function(req, res, next) {
  Team.list().then(function (teams) {
    res.json(teams);
  });
});

/**
 * @api {get} /team/:id Request A Team's Information
 * @apiName GetTeam
 * @apiGroup Team
 */
router.get('/:id', function(req, res, next) {
  Team.read(req.params.id).then(function (team) {
    res.json(team);
  });
});

/**
 * @api {get} /team/:id/member Request A Team's Member
 * @apiName GetTeamMember
 * @apiGroup Team
 */
router.get('/:id/member', function(req, res, next) {
  Member.teamList(req.params.id).then(function (team) {
    res.json(team);
  });
});

/**
 * @api {get} /team/:id/survey Request A Team's Survey
 * @apiName GetTeamSurvey
 * @apiGroup Team
 */
router.get('/:id/survey', function(req, res, next) {
  Survey.teamList(req.params.id).then(function (team) {
    res.json(team);
  });
});

/**
 * @api {post} /team Create A Team
 * @apiName CreateTeam
 * @apiGroup Team
 * @apiParam {String} name  Name of Team.
 */
router.post('/', function(req, res, next) {
  Team.create(req.body.name).then(function (id) {
    res.json({success:true, id: id[0]});
  });
});

/**
 * @api {post} /team/:id/member Create A Member For A Team
 * @apiName CreateTeamMember
 * @apiGroup Team
 * @apiParam {String} name  Name of Member.
 */
router.post('/:id/member', function(req, res, next) {
  Member.create(req.params.id, req.body.name).then(function (id) {
    res.json({success:true, id: id[0]});
  });
});

/**
 * @api {post} /team/:id/survey Create A Survey For A Team
 * @apiName CreateTeamSurvey
 * @apiGroup Team
 * @apiParam {String} name  Name of Survey.
 */
router.post('/:id/survey', function(req, res, next) {
  Survey.create(req.params.id, req.body.name).then(function (id) {
    res.json({success:true, id: id[0]});
  });
});

/**
 * @api {put} /team/:id Update A Team
 * @apiName UpdateTeam
 * @apiGroup Team
 */
router.put('/:id', function(req, res, next) {
  Team.update(req.params.id, req.body.name).then(function () {
    res.json({success:true});
  });
});

/**
 * @api {delete} /team/:id Delete A Team
 * @apiName DeleteTeam
 * @apiGroup Team
 */
router.delete('/:id', function(req, res, next) {
  Team.delete(req.params.id).then(function () {
    res.json({success:true});
  });
});

module.exports = router;

