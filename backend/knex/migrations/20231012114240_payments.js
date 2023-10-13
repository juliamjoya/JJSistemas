/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('payments').then((exists) => {
        if(!exists){
            return knex.schema.createTable("payments", function (table){
                table.increments("payments_id").primary();
                table.integer("categories_id");
                table.timestamp("date_pay").defaultTo(knex.fn.now());
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
