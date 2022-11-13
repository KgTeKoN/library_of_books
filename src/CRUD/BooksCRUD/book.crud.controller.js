const { getBookH, getAllBooksH, createBookH, updateBookH, deleteBookH } = require('./booksdb.handler');

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

const createBook = async (req, res) => {
    const result = await createBookH(req.body)
    res.status(201).json(result);
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

module.exports = { getBook, getAllBooks, createBook, updateBook, deleteBook }
