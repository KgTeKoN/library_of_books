const { getBookH, getAllBooksH, updateBookH, deleteBookH } = require('./user.crud.handler');

const getBook = async (req, res) => {
    const result = await getBookH(req.query.username)
    res.status(200).json(result);
    res.end();
}

const getAllBooks = async (req, res) => {
    const result = await getAllBooksH(req.body)
    res.status(200).json(result);
    res.end();
}

const updateBook = async (req, res) => {
    const result = await updateBookH(req.query.username, req.body)
    res.status(200).json(result);
    res.end();
}

const deleteBook = async (req, res) => {
    const result = await deleteBookH(req.query.username)
    res.status(200).json(result);
    res.end();
}

module.exports = { getBook, getAllBooks, updateBook, deleteBook }
