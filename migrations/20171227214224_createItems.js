
exports.up = function(knex, Promise) {
    return knex.raw(`
        CREATE TABLE items(
        id SERIAL,
        name VARCHAR(100) NOT NULL,
        action VARCHAR(100) NOT NULL,
        status  boolean NOT NULL
    )`);
  
};

exports.down = function(knex, Promise) {
    return knex.raw('DROP TABLE items');
};
