const jwt = require('jsonwebtoken');

const createToken = async (data, secret, time) => {
    const token = await jwt.sign(data, secret, { expiresIn: time });
    return token;
};

const validateToken = async (token, secret) => {
    const verify = jwt.verify(token, secret);
    return verify;
};

module.exports = { createToken, validateToken };
