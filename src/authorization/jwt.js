const jwt = require('jsonwebtoken');

const createToken = async (data, secret, time) => {
    const token = await jwt.sign(data, secret, {expiresIn: time});
    return token;
}

module.exports = { createToken }
