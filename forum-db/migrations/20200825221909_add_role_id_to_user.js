exports.up = function(knex) {
    return knex.schema.table('users', table => {
        // create role_id column on the user table as an unsigned integer that
        // references the id in the role table
        table.integer('role_id').unsigned().references('id').inTable('role')
    })
  };

  exports.down = function(knex) {
    return knex.schema.table('users', table => {
        table.dropColumn('role_id')
    })
  };
