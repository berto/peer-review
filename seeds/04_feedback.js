var uuid = require('uuid/v4');
var Chance = require('chance');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('feedback').del()
    .then(function () {
      return knex('member').orderBy('created_at');
    })
    .then(function (members) {
      return knex('survey').orderBy('created_at').then(function(surveys) {
        return {surveys: surveys, members: members};
      });
    })
    .then(function (data) {
      var feedback = []
      data.members.forEach((member, i) => {
        var chance = new Chance();
        // Inserts seed entries
        feedback.push(knex('feedback').insert({id: uuid(), score: chance.integer({min: 0, max: 5}), feedback: chance.paragraph(), survey_id: data.surveys[i].id, member_id: member.id}))
        feedback.push(knex('feedback').insert({id: uuid(), score: chance.integer({min: 0, max: 5}), feedback: chance.paragraph(), survey_id: data.surveys[i].id, member_id: member.id}))
        feedback.push(knex('feedback').insert({id: uuid(), score: chance.integer({min: 0, max: 5}), feedback: chance.paragraph(), survey_id: data.surveys[i].id, member_id: member.id}))
      });
      return Promise.all(feedback);
    });
};
