const { validateToken } = require('./jwt');
const { accessTokenKey, refreshTokenKey } = require('../../config');

const accessTokenVerification = async (req, res, next) => {
    try {
        await validateToken(req.header('accessToken'), accessTokenKey);
        return next();
    } catch (e) {
        res.status(400).send(e);
        res.end();
    }
};

const refreshTokenVerification = async (req, res, next) => {
    try {
        await validateToken(req.header('refreshToken'), refreshTokenKey);
        return next();
    } catch (e) {
        res.status(400).send(e);
        res.end();
    }
};

module.exports = { accessTokenVerification, refreshTokenVerification };
