
exports.up = function(knex, Promise) {
  return knex.schema.createTable('hiker_fav_trails',function(table){
    table.increments();
    table.integer('hiker_id').index().references('hiker.id');
    table.integer('trail_id').index().references('trails.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("hiker_fav_trails");
};
