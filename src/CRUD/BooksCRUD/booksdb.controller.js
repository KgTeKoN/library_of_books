const bookDAO = require('./booksdb.handler');

class BooksdbController {
    async createBook(data) {
        try {
            const result = await bookDAO.createBook(data);
            return result;
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }

    async findBook(data) {
        try {
            const result = await bookDAO.findBook(data);
            return result;
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }

    async updateBook(title, data) {
        try {
            const result = await bookDAO.updateBook(title, data);
            return result;
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }

    async deleteBook(data) {
        try {
            const result = await bookDAO.deleteBook(data);
            return result;
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }
}

module.exports = new BooksdbController();
