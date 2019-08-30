exports.up = function(knex) {

    return (
        knex.schema.createTable('books', table => {
            table.increments();
            table.string('book', 64)
            .notNullable();
            table.string('desc', 64)
            .notNullable();
        })
    );
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
}