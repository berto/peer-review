var express = require('express');
var router = express.Router();
var Survey = require('../../db/queries/surveys');
var Feedback = require('../../db/queries/feedbacks');

router.get('/', function(req, res, next) {
  Survey.list().then(function (surveys) {
    res.json(surveys);
  });
});

router.get('/:id', function(req, res, next) {
  Survey.read(req.params.id).then(function (survey) {
    res.json(survey);
  });
});

router.get('/:id/member', function(req, res, next) {
  Survey.readMembers(req.params.id).then(function (survey) {
    res.json(survey);
  });
});

router.get('/:id/member/:member_id/feedback', function(req, res, next) {
  Feedback.surveyRead(req.params.id, req.params.member_id).then(function (feedback) {
    res.json(feedback);
  });
});

router.post('/:id/feedback', function(req, res, next) {
  var feedbacks = req.body.map(function (feedback) {
    return Feedback.create({
      survey_id: req.params.id,
      member_id: feedback.member_id,
      feedback: feedback.text,
      score: feedback.rating + 1
    });
  });
  Promise.all(feedbacks).then(function (result) {
    res.json(result);
  });
});

router.post('/', function(req, res, next) {
  Survey.create(req.body.name).then(function (id) {
    res.json({success:true, id: id[0]});
  });
});

router.put('/:id', function(req, res, next) {
  Survey.update(req.params.id, req.body.name).then(function () {
    res.json({success:true});
  });
});

router.delete('/:id', function(req, res, next) {
  Survey.delete(req.params.id).then(function () {
    res.json({success:true});
  });
});

module.exports = router;

