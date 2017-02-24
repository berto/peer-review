var knex = require('./../connection');
var uuid = require('uuid/v4');

module.exports = {
  memberList: function (id) {
    return knex('feedback').where('member_id', id).orderBy('created_at', 'desc');
  },
  surveyRead: function (survey_id, member_id) {
    return knex('feedback').where({member_id: member_id, survey_id: survey_id}).orderBy('created_at', 'desc');
  }
}
