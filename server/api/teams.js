var express = require('express');
var router = express.Router();
var Team = require('../../db/queries/teams');

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

router.post('/', function(req, res, next) {
  Team.create(req.body.name).then(function (id) {
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

