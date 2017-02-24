
exports.up = function(knex, Promise) {
  return knex.schema.createTable('feedback', function(table) {
    table.uuid('id').notNullable().primary();
    table.integer('score');
    table.text('feedback');
    table.uuid('survey_id').references('id').inTable('survey').onDelete('CASCADE');
    table.uuid('member_id').references('id').inTable('member').onDelete('CASCADE');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('feedback');
};
