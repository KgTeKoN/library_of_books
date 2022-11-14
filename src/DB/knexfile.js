const {
    pgConnectionHost,
    pgConnectionPort,
    pgConnectionUser,
    pgConnectionPassword,
    pgConnectionDB,
} = require('../../config');

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: pgConnectionHost,
            port: pgConnectionPort,
            user: pgConnectionUser,
            password: pgConnectionPassword,
            database: pgConnectionDB,
        },
        pool: {
            min: 0,
            max: 10,
        },
    },
};
