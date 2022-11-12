const db = require('../knex/db')

class BookDAO {
    async createBook(data) {
        const [id] = await db('books')
            .insert(data)
            .returning('id');

        return id;
    }

    async findBook(data) {
        const [result] = await db('books')
            .select('*')
            .where(data);

        return result;
    }

    async updateBook(username, data) {
        const [id] = await db('books')
            .where('title', username)
            .update(data)
            .returning('id');

        return id;
    }

    async deleteBook(data) {
        const [id] = await db('books')
            .where(data)
            .del()
            .returning('id');

        return id;
    }
}

module.exports = new BookDAO()
