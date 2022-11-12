const db = require('../knex/db')

class FavoritesDAO {
    async createFavoriteBook(data) {
        const [id] = await db('books')
            .insert(data)
            .returning('id');

        return id;
    }

    async findFavoriteBook(data) {
        const [result] = await db('books')
            .select('*')
            .where(data);

        return result;
    }

    async updateFavoriteBook(username, data) {
        const [id] = await db('books')
            .where('title', username)
            .update(data)
            .returning('id');

        return id;
    }

    async deleteFavoriteBook(data) {
        const [id] = await db('books')
            .where(data)
            .del()
            .returning('id');

        return id;
    }
}

module.exports = new FavoritesDAO()
