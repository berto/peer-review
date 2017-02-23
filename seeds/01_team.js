var uuid = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('team').del()
    .then(function () {
      var firstUUID = uuid();
      var secondUUID = uuid();
      return Promise.all([
        // Inserts seed entries
        knex('team').insert({id: firstUUID, name: 'g38'}),
        knex('team').insert({id: secondUUID, name: 'g43'}),
      ]);
    });
};
