var knex = require('./../connection');
var uuid = require('uuid/v4');

module.exports = {
  findById: function(id) {
    return knex('feedback').where('id', id);
  },
  findByEmail: function(email) {
    return knex('feedback').where('email', id);
  },
  create: function(user) {
    user.id = uuid();
    return knex('user').insert(user).returning('id');
  }
}
