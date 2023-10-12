/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('products').then((exists) => {
        if(!exists){
            return knex.schema.createTable("products", function (table){
                table.increments("products_id").primary();
                table.integer("categories_id");
                table.string("products_name").notNullable;
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
