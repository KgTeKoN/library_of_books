const { getStatusH, changeStatusH } = require('./status.handler');

const getStatus = async (req, res) => {
    const result = await getStatusH(req.query.username);
    res.status(200).json(result);
    res.end();
};

const changeStatus = async (req, res) => {
    const result = await changeStatusH(req.query.username, req.query.status);
    res.status(200).json(result);
    res.end();
};

module.exports = { getStatus, changeStatus };
