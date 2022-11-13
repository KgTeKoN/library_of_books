const { getUserH, getAllUsersH, updateUserH, deleteUserH } = require('./user.crud.handler');

const getUser = async (req, res) => {
    const result = await getUserH(req.query.username)
    res.status(200).json(result);
    res.end();
}

const getAllUsers = async (req, res) => {
    const result = await getAllUsersH(req.query)
    res.status(200).json(result);
    res.end();
}

const updateUser = async (req, res) => {
    const result = await updateUserH(req.query.username, req.body)
    res.status(200).json(result);
    res.end();
}

const deleteUser = async (req, res) => {
    const result = await deleteUserH(req.query.username)
    res.status(200).json(result);
    res.end();
}

module.exports = { getUser, getAllUsers, updateUser, deleteUser }
