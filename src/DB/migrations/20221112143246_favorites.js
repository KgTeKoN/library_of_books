exports.up = function(knex) {
    return knex.schema.createTable("favorites", (t) => {
        t.increments("_id").primary();
        t.integer("user_id").notNullable();
        t.foreign("user_id").references("_id").inTable("users");
        t.integer("book_id").notNullable()
        t.foreign("book_id").references("_id").inTable("books");
        t.timestamps(true, true);
    })
        .then(() => knex.raw(`
        CREATE OR REPLACE FUNCTION on_update_timestamp()
        RETURNS trigger AS $$
            BEGIN
                NEW.updated_at = now();
                RETURN NEW;
            END;
        $$ language 'plpgsql';
    `)).then(() => knex.raw(`
        CREATE TRIGGER users_updated_at
        BEFORE UPDATE ON favorites
        FOR EACH ROW
        EXECUTE PROCEDURE on_update_timestamp();
    `))
};

exports.down = function(knex) {
    return knex.schema.dropTable("favorites")
};
