exports.up = function (knex) {
    return knex.schema
        .createTable('favorites', (t) => {
            t.string('username').notNullable();
            t.foreign('username').references('username').inTable('users');
            t.string('title').notNullable();
            t.foreign('title')
                .references('title')
                .inTable('books')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            t.primary(['username', 'title']);
            t.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());
            t.timestamp('updated_at', { useTz: true }).defaultTo(knex.fn.now());
        })
        .then(() =>
            knex.raw(`
        CREATE OR REPLACE FUNCTION on_update_timestamp()
        RETURNS trigger AS $$
            BEGIN
                NEW.updated_at = now();
                RETURN NEW;
            END;
        $$ language 'plpgsql';
    `)
        )
        .then(() =>
            knex.raw(`
        CREATE TRIGGER users_updated_at
        BEFORE UPDATE ON favorites
        FOR EACH ROW
        EXECUTE PROCEDURE on_update_timestamp();
    `)
        );
};

exports.down = function (knex) {
    return knex.schema.dropTable('favorites');
};
