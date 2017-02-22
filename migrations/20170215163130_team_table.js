
exports.up = function(knex, Promise) {
  return knex.schema.createTable('team', function(table) {
    table.uuid('id').notNullable().primary();
    table.string('name');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('team');
};
