const express = require('express');
const routes = express.Router();
const { getUser, getAllUsers, updateUser, deleteUser } = require('./UsersCRUD/user.crud.controller');
const { getBook, getAllBooks, createBook, updateBook, deleteBook} = require('./BooksCRUD/book.crud.controller');
const { getFavoriteBooks, addFavoriteBook, deleteFavoriteBook} = require('./FavoritesCRUD/favorite.crud.controller');

routes.get('/get-user', getUser);
routes.get('/get-all-users', getAllUsers);
routes.patch('/update-user', updateUser);
routes.delete('/delete-user', deleteUser);

routes.get('/get-book', getBook);
routes.get('/get-all-books', getAllBooks);
routes.post('/create-book', createBook);
routes.patch('/update-book', updateBook);
routes.delete('/delete-book', deleteBook);

routes.get('/get-favorite-books', getFavoriteBooks);
routes.post('/add-favorite-book', addFavoriteBook);
routes.delete('/delete-favorite-book', deleteFavoriteBook);

module.exports = routes
