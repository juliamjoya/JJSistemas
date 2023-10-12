/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('users').then((exists) => {
        if(!exists){
            return knex.schema.createTable("users", function (table){
                table.increments("users_id").primary();
                table.string("users_name").notNullable;
                table.string("users_password").notNullable;
                table.string("users_email").notNullable;
                table.string("users_phone").notNullable;
            });
        }
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
