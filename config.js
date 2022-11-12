const port = 5555;
const pgConnectionHost = 'localhost';
const pgConnectionPort = 5080;
const pgConnectionUser = 'library';
const pgConnectionPassword = 'library';
const pgConnectionDB = 'library_of_books_DB';
const cipherAlgorithm = 'aes-256-cbc';
const secret = 'a6c22b3a4154cefe165baea2729c2f616c472567741a276ecaf7206e30e61d9c';
const accessTokenKey = 'access_token';
const refreshTokenKey = 'refresh_token';

module.exports = { port, pgConnectionHost,
    pgConnectionPort, pgConnectionUser, pgConnectionPassword, pgConnectionDB,
    cipherAlgorithm, secret, accessTokenKey, refreshTokenKey
}
