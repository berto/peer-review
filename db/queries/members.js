var knex = require('./../connection');
var uuid = require('uuid/v4');

module.exports = {
  list: function () {
    return knex('member').orderBy('created_at', 'desc');
  },
  teamList: function (id) {
    return knex('member').where('team_id', id).orderBy('created_at', 'desc');
  },
  read: function (id) {
    return knex('member').where({id: id}).first();
  },
  create: function (id, name) {
    return knex('member').insert({
      id: uuid(),
      name: name,
      team_id: id
    }).returning('id')
  },
  update: function (id, name) {
    return knex('member').update({name: name}).where({id: id});
  },
  delete: function (id) {
    return knex('member').where({id: id}).delete();
  }
}
