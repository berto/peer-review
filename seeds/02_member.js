var uuid = require('uuid/v4');
var Chance = require('chance');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('member').del()
    .then(function () {
      return knex('team').orderBy('created_at');
    })
    .then(function (teams) {
      var members = []
      teams.forEach(team => {
        var chance = new Chance();
        // Inserts seed entries
        members.push(knex('member').insert({id: uuid(), name: chance.name(), team_id: team.id}))
        members.push(knex('member').insert({id: uuid(), name: chance.name(), team_id: team.id}))
        members.push(knex('member').insert({id: uuid(), name: chance.name(), team_id: team.id}))
      });
      return Promise.all(members);
    });
};
