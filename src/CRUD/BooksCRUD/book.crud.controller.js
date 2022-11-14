const {
    getBookH,
    getAllBooksH,
    createBookH,
    updateBookH,
    deleteBookH,
} = require('./book.crud.handler');

const createBook = async (req, res) => {
    const result = await createBookH(req.body);
    res.status(200).json(result);
    res.end();
};

const getBook = async (req, res) => {
    const result = await getBookH(req.query.title);
    res.status(200).json(result);
    res.end();
};

const getAllBooks = async (req, res) => {
    const result = await getAllBooksH(req.query);
    res.status(200).json(result);
    res.end();
};

const updateBook = async (req, res) => {
    const result = await updateBookH(req.query.title, req.body);
    res.status(200).json(result);
    res.end();
};

const deleteBook = async (req, res) => {
    const result = await deleteBookH(req.query.title);
    res.status(200).json(result);
    res.end();
};

module.exports = { createBook, getBook, getAllBooks, updateBook, deleteBook };
