/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.hasTable('categories').then((exists) => {
    if(!exists){
        return knex.schema.createTable("categories", function (table){
            table.increments("categories_id").primary();
            table.string("categories_name").notNullable;
            table.string("categories_type").notNullable;
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
