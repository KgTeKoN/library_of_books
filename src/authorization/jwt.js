const jwt = require('jsonwebtoken');

const token = async (data, secret, time) => {
    const token = await jwt.sign(data, secret, {expiresIn: time});
    return token;
}

module.exports = { token }
