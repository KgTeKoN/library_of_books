const {
    signUp,
    signIn,
    refreshHandler,
    logoutHandler,
    activateHandler,
} = require('./authorization.handler');

const registration = async (req, res) => {
    const result = await signUp(req.body);
    res.status(201).json(result);
    res.end();
};

const generateToken = async (req, res) => {
    const result = await signIn(req.body);
    res.status(201).json(result);
    res.end();
};

const activate = async (req, res) => {
    const result = await activateHandler(req.header('accessToken'));
    res.status(201).json(result);
    res.end();
};

const refresh = async (req, res) => {
    const result = await refreshHandler(req.header('refreshToken'));
    res.status(201).json(result);
    res.end();
};

const logout = async (req, res) => {
    const result = await logoutHandler(req.header('accessToken'));
    res.status(201).json(result);
    res.end();
};

module.exports = { registration, generateToken, logout, refresh, activate };
