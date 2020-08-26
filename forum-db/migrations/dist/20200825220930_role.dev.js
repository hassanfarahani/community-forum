"use strict";

exports.up = function (knex) {
  return knex.schema.createTable('role', function (table) {
    table.increments();
    table.text('name');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('role');
};