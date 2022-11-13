const { getUserH, getAllUsersH, updateUserH, deleteUserH } = require('./user.crud.handler');

const getUser = async (req, res) => {
    const result = await getUserH(req.body)
    res.status(200).json(result);
    res.end();
}

const getAllUsers = async (req, res) => {
    const result = await getAllUsersH(req.body)
    res.status(200).json(result);
    res.end();
}

const updateUser = async (req, res) => {
    const result = await updateUserH(req.body)
    res.status(200).json(result);
    res.end();
}

const deleteUser = async (req, res) => {
    const result = await deleteUserH(req.body)
    res.status(200).json(result);
    res.end();
}

module.exports = { getUser, getAllUsers, updateUser, deleteUser }
