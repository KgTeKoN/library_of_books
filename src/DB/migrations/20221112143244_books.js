exports.up = function(knex) {
    return knex.schema.createTable("books", (t) => {
        t.increments("_id").primary();
        t.string("title", 100).notNullable().unique();
        t.string("author", 300);
        t.decimal("year", 5, 0);
        t.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());;
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable("books")
};

