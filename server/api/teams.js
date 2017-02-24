var express = require('express');
var router = express.Router();
var Team = require('../../db/queries/teams');
var Member = require('../../db/queries/members');
var Survey = require('../../db/queries/surveys');

router.get('/', function(req, res, next) {
  Team.list().then(function (teams) {
    res.json(teams);
  });
});

router.get('/:id', function(req, res, next) {
  Team.read(req.params.id).then(function (team) {
    res.json(team);
  });
});

router.get('/:id/member', function(req, res, next) {
  Member.teamList(req.params.id).then(function (team) {
    res.json(team);
  });
});

router.get('/:id/survey', function(req, res, next) {
  Survey.teamList(req.params.id).then(function (team) {
    res.json(team);
  });
});

router.post('/', function(req, res, next) {
  Team.create(req.body.name).then(function (id) {
    res.json({success:true, id: id[0]});
  });
});

router.post('/:id/member', function(req, res, next) {
  Member.create(req.params.id, req.body.name).then(function (id) {
    res.json({success:true, id: id[0]});
  });
});

router.post('/:id/survey', function(req, res, next) {
  Survey.create(req.params.id, req.body.name).then(function (id) {
    res.json({success:true, id: id[0]});
  });
});

router.put('/:id', function(req, res, next) {
  Team.update(req.params.id, req.body.name).then(function () {
    res.json({success:true});
  });
});

router.delete('/:id', function(req, res, next) {
  Team.delete(req.params.id).then(function () {
    res.json({success:true});
  });
});

module.exports = router;

