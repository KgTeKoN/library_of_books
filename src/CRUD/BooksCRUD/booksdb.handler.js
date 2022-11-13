const db = require('../../DB/db')

class BookDAO {
    async createBook(data) {
        const [id] = await db('books')
            .insert(data)
            .returning('_id');

        return id;
    }

    async findBook(data) {
        const result = await db('books')
            .select('*')
            .where(data);

        return result;
    }

    async updateBook(title, data) {
        const [book] = await db('books')
            .where('title', title)
            .update(data)
            .returning('title');

        return book;
    }

    async deleteBook(data) {
        const [title] = await db('books')
            .where(data)
            .del()
            .returning('title');

        return title;
    }
}

module.exports = new BookDAO()
