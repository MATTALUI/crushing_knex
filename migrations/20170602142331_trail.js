
exports.up = function(knex, Promise) {
  return knex.schema.createTable("trails", function (table) {
    table.increments();
    table.text("description");
    table.float("length");
    table.float("elevation");
    table.text("condition");
    table.date("condition_date");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("trails");
};
