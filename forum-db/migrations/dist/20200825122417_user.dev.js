"use strict";

exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments(); // table id

    table.text('display_name').notNullable();
    table.text('email').notNullable();
    table.text('google_id').notNullable();
    table.text('banned').notNullable()["default"](false);
  });
}; // to drop this table


exports.down = function (knex) {
  return knex.schema.dropTable('users');
};