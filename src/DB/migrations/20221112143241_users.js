exports.up = function(knex) {
    return knex.schema.createTable("users", t => {
        t.increments("_id").primary();
        t.string("username", 40).notNullable().unique();
        t.string("password", 300);
        t.string("first_name", 40);
        t.string("last_name", 40);
        t.string("status", 40);
        t.string("refresh_token", 256);
        t.timestamp("created_at", { useTz: true }).defaultTo(knex.fn.now());
        t.timestamp("updated_at", { useTz: true }).defaultTo(knex.fn.now());
    }).then(() => knex.raw(`
        CREATE OR REPLACE FUNCTION on_update_timestamp()
        RETURNS trigger AS $$
            BEGIN
                NEW.updated_at = now();
                RETURN NEW;
            END;
        $$ language 'plpgsql';
    `)).then(() => knex.raw(`
        CREATE TRIGGER users_updated_at
        BEFORE UPDATE ON users
        FOR EACH ROW
        EXECUTE PROCEDURE on_update_timestamp();
    `))
};

exports.down = function(knex) {
    return knex.schema.dropTable("users").raw(`DROP FUNCTION on_update_timestamp`);
};
