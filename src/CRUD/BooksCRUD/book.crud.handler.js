const bookController = require('./booksdb.controller');
const pagination = require('../../Pagination/pagination.controller');

const getBookH = async (title) => {
    const [result] = await bookController.findBook({ title: title });
    const answer = {};
    if (result) {
        answer.success = true;
        answer.data = result;
        return answer;
    }

    answer.success = false;
    answer.message = 'No book found';
    return answer;
};

const getAllBooksH = async (data) => {
    const query = {};
    const answer = {};
    if (data.title) query.title = data.title;
    if (data.author) query.author = data.author;
    if (data.year) query.year = data.year;
    let sort = '_id';
    if (data.sort) sort = data.sort;
    let limit = 3;
    if (data.limit) limit = data.limit;
    answer.limit = limit;
    let skip = 0;
    if (data.skip) skip = data.skip;
    let page = 1;
    if (data.page) skip = +skip + (data.page - 1) * limit;
    answer.page = page;
    const result = await pagination.paginationBooks(query, sort, limit, skip);
    if (result && result.length) {
        answer.success = true;
        answer.data = result;
        return answer;
    }

    answer.success = false;
    answer.message = 'No books found';
    return answer;
};

const createBookH = async (data) => {
    const result = await bookController.createBook(data);
    return result;
};

const updateBookH = async (title, data) => {
    const result = await bookController.updateBook(title, data);
    const answer = {};
    if (result && result.title) {
        answer.success = true;
        answer.message = `Book ${result.title} has been updated`;
        return answer;
    }

    answer.success = false;
    answer.message = 'No book found';
    return answer;
};

const deleteBookH = async (title) => {
    const result = await bookController.deleteBook({ title: title });
    const answer = {};
    if (result && result.title) {
        answer.success = true;
        answer.message = `Book ${result.title} has been deleted`;
        return answer;
    }

    answer.success = false;
    answer.message = 'No book found';
    return answer;
};

module.exports = {
    createBookH,
    getBookH,
    getAllBooksH,
    updateBookH,
    deleteBookH,
};
