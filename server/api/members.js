var express = require('express');
var router = express.Router();
var Member = require('../../db/queries/members');

router.get('/', function(req, res, next) {
  Member.list().then(function (members) {
    res.json(members);
  });
});

router.get('/:id', function(req, res, next) {
  Member.read(req.params.id).then(function (member) {
    res.json(member);
  });
});

router.post('/', function(req, res, next) {
  Member.create(req.body.name).then(function (id) {
    res.json({success:true, id: id[0]});
  });
});

router.put('/:id', function(req, res, next) {
  Member.update(req.params.id, req.body.name).then(function () {
    res.json({success:true});
  });
});

router.delete('/:id', function(req, res, next) {
  Member.delete(req.params.id).then(function () {
    res.json({success:true});
  });
});

module.exports = router;

