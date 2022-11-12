const { signUp, signIn } = require('./authorization.handler');

const registration = async (req, res) => {
    const result = await signUp(req.body)
    res.status(201).json(result);
    res.end();
}

const generateToken = async (req, res) => {
    const result = await signIn(req.body)
    res.status(201).json(result);
    res.end();
}

module.exports = { registration, generateToken }
