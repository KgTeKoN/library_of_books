const {
    createFavoriteBookH,
    getFavoriteBooksH,
    deleteFavoriteBookH,
} = require('./favorite.crud.handler');

const createFavoriteBook = async (req, res) => {
    const result = await createFavoriteBookH(req.body);
    res.status(200).json(result);
    res.end();
};

const getFavoriteBooks = async (req, res) => {
    const result = await getFavoriteBooksH(req.query.username);
    res.status(200).json(result);
    res.end();
};

const deleteFavoriteBook = async (req, res) => {
    const result = await deleteFavoriteBookH(
        req.query.username,
        req.query.title
    );
    res.status(200).json(result);
    res.end();
};

module.exports = { createFavoriteBook, getFavoriteBooks, deleteFavoriteBook };
