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
      var feedback = [];
      var futureTeammate = ["No", "Indifferent", "Yes"];
      data.members.forEach((member, i) => {
        data.surveys.forEach((survey, j) => {
          var chance = new Chance();
          // Inserts seed entries
          feedback.push(knex('feedback').insert({id: uuid(), score: chance.integer({min: 0, max: 4}), contribution: chance.integer({min: 0, max: 2}), futureTeammate: futureTeammate[chance.integer({min: 0, max: 2})], feedback: chance.paragraph(), survey_id: data.surveys[j].id, member_id: member.id}));
          feedback.push(knex('feedback').insert({id: uuid(), score: chance.integer({min: 0, max: 4}), contribution: chance.integer({min: 0, max: 2}), futureTeammate: futureTeammate[chance.integer({min: 0, max: 2})], feedback: chance.paragraph(), survey_id: data.surveys[j].id, member_id: member.id}));
          feedback.push(knex('feedback').insert({id: uuid(), score: chance.integer({min: 0, max: 4}), contribution: chance.integer({min: 0, max: 2}), futureTeammate: futureTeammate[chance.integer({min: 0, max: 2})], feedback: chance.paragraph(), survey_id: data.surveys[j].id, member_id: member.id}));
        });
      });
      return Promise.all(feedback);
    });
};
