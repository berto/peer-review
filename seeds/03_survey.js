var uuid = require('uuid/v4');
var Chance = require('chance');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('survey').del()
    .then(function () {
      return knex('team').orderBy('created_at');
    })
    .then(function (teams) {
      var surveys = []
      teams.forEach(team => {
        var chance = new Chance();
        // Inserts seed entries
        surveys.push(knex('survey').insert({id: uuid(), name: chance.name(), team_id: team.id}))
        surveys.push(knex('survey').insert({id: uuid(), name: chance.name(), team_id: team.id}))
        surveys.push(knex('survey').insert({id: uuid(), name: chance.name(), team_id: team.id}))
      });
      return Promise.all(surveys);
    });
};
