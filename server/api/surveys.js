var express = require('express');
var router = express.Router();
var Survey = require('../../db/queries/surveys');
var Feedback = require('../../db/queries/feedbacks');

/**
 * @api {get} /survey Request Survey Information
 * @apiName GetSurveys
 * @apiGroup Survey
 */
router.get('/', function(req, res, next) {
  Survey.list().then(function (surveys) {
    res.json(surveys);
  });
});

/**
 * @api {get} /survey/:id Request A Survey's Information
 * @apiName GetSurvey
 * @apiGroup Survey
 */
router.get('/:id', function(req, res, next) {
  Survey.read(req.params.id).then(function (survey) {
    res.json(survey);
  });
});

/**
 * @api {get} /survey/:id/member Request A Survey's Members
 * @apiName GetSurveysMembers
 * @apiGroup Survey
 */
router.get('/:id/member', function(req, res, next) {
  Survey.readMembers(req.params.id).then(function (survey) {
    res.json(survey);
  });
});

/**
 * @api {get} /survey/:survey_id/member/:member_id/feedback Request A Member's Feedback for a Specific Survey
 * @apiName GetMembersFeedbackForSurvey
 * @apiGroup Survey
 */
router.get('/:id/member/:member_id/feedback', function(req, res, next) {
  Feedback.surveyRead(req.params.id, req.params.member_id).then(function (feedback) {
    res.json(feedback);
  });
});

/**
 * @api {post} /survey/:id/feedback Create Member Feedback for A Survey 
 * @apiName CreateMemberFeedbackForSurvey
 * @apiGroup Survey
 * @apiParam {Number} survey_id  ID of Survey.
 * @apiParam {Number} member_id  ID of Member.
 * @apiParam {String} feedback  Member Feedback.
 * @apiParam {String} contribution  Member Contribution Level.
 * @apiParam {String} futureTeammate  Member As A Future Teammate.
 * @apiParam {Number} score  Member Score Rating.
 */
router.post('/:id/feedback', function(req, res, next) {
  var feedbacks = req.body.map(function (feedback) {
    return Feedback.create({
      survey_id: req.params.id,
      member_id: feedback.member_id,
      feedback: feedback.text,
      score: feedback.rating + 1,
      contribution: feedback.contribution,
      future_teammate: feedback.futureTeammate
    });
  });
  Promise.all(feedbacks).then(function (result) {
    res.json(result);
  });
});

/**
 * @api {post} /survey Create A Survey
 * @apiName CreateSurvey
 * @apiGroup Survey
 * @apiParam {String} name  Name of Survey.
 */
router.post('/', function(req, res, next) {
  Survey.create(req.body.name).then(function (id) {
    res.json({success:true, id: id[0]});
  });
});

/**
 * @api {put} /survey/:id Update A Survey's Information
 * @apiName UpdateSurvey
 * @apiGroup Survey
 */
router.put('/:id', function(req, res, next) {
  Survey.update(req.params.id, req.body.name).then(function () {
    res.json({success:true});
  });
});

/**
 * @api {delete} /survey/:id Delete A Survey's
 * @apiName DeleteSurvey
 * @apiGroup Survey
 */
router.delete('/:id', function(req, res, next) {
  Survey.delete(req.params.id).then(function () {
    res.json({success:true});
  });
});

module.exports = router;
