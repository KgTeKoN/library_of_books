const bookController = require('./booksdb.controller');

const getBookH = async (title) => {
    const [result] = await bookController.findBook({title: title});
    const answer = {};
    if (result) {
        answer.success = true;
        answer.data = result;
        return answer;
    }

    answer.success = false;
    answer.message = 'No book found'
    return answer
}

const getAllBooksH = async () => {
    const result = await bookController.findBook({})
    const answer = {};
    if ((result) && (result.length)) {
            answer.success = true;
            answer.data = result;
            return answer;
        }

    answer.success = false;
    answer.message = 'No books found'
    return answer
}

const createBookH = async (data) => {
    const result = await bookController.createBook(data);
    return result
}

const updateBookH = async (title, data) => {
    const result = await bookController.updateBook(title, data);
    const answer = {};
    if ((result) && (result.title) ) {
        answer.success = true;
        answer.message = `Book ${result.title} has been updated`;
        return answer
    }

    answer.success = false;
    answer.message = 'No book found'
    return answer;
}

const deleteBookH = async (title) => {
    const result = await bookController.deleteBook({title: title});
    const answer = {} ;
    if ((result) && (result.title) ) {
        answer.success = true;
        answer.message = `Book ${result.title} has been deleted`;
        return answer
    }

    answer.success = false;
    answer.message = 'No book found'
    return answer;
}

module.exports = { createBookH, getBookH, getAllBooksH, updateBookH, deleteBookH }
