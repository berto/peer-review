var knex = require('./../connection');
var uuid = require('uuid/v4');

module.exports = {
  list: function () {
    return knex('team').orderBy('created_at', 'desc');
  },
  read: function (id) {
    return knex('team').where({id: id}).first();
  },
  create: function (name) {
    return knex('team').insert({
      id: uuid(),
      name: name
    }).returning('id')
  },
  update: function (id, name) {
    return knex('team').update({name: name}).where({id: id});
  },
  delete: function (id) {
    return knex('team').where({id: id}).delete();
  }
}
