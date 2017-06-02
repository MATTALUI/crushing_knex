
exports.up = function(knex, Promise) {
  return knex.schema.createTable("hiker", function (table) {
    table.increments();
    table.text("first_name");
    table.text("last_name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("hiker");
};
