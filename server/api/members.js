var express = require('express');
var router = express.Router();
var Member = require('../../db/queries/members');
var Feedback = require('../../db/queries/feedbacks');

/**
 * @api {get} /member Request Member Information
 * @apiName GetMembers
 * @apiGroup Member
 */
router.get('/', function(req, res, next) {
  Member.list().then(function (members) {
    res.json(members);
  });
});

/**
 * @api {get} /member/:id Request A Member Information
 * @apiName GetMember
 * @apiGroup Member
 */
router.get('/:id', function(req, res, next) {
  Member.read(req.params.id).then(function (member) {
    res.json(member);
  });
});

/**
 * @api {get} /member/:id/feedback Request A Member's Feedback Information
 * @apiName GetMembersFeedback
 * @apiGroup Member
 */
router.get('/:id/feedback', function(req, res, next) {
  Feedback.memberList(req.params.id).then(function (feedback) {
    res.json(feedback);
  });
});

/**
 * @api {post} /member/:id Create A Member
 * @apiName CreateMember
 * @apiGroup Member
 * @apiParam {String} name  Name of Member.
 */
router.post('/', function(req, res, next) {
  Member.create(req.body.name).then(function (id) {
    res.json({success:true, id: id[0]});
  });
});

/**
 * @api {put} /member/:id Update A Member's Information
 * @apiName UpdateMember
 * @apiGroup Member
 */
router.put('/:id', function(req, res, next) {
  Member.update(req.params.id, req.body.name).then(function () {
    res.json({success:true});
  });
});

/**
 * @api {delete} /member/:id Delete A Member
 * @apiName DeleteMember
 * @apiGroup Member
 */
router.delete('/:id', function(req, res, next) {
  Member.delete(req.params.id).then(function () {
    res.json({success:true});
  });
});

module.exports = router;
