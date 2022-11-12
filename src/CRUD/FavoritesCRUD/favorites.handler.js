const db = require('../knex/db')

class FavoritesDAO {
    async createPair(data) {
        const [id] = await db('books')
            .insert(data)
            .returning('id');

        return id;
    }

    async findPair(data) {
        const [result] = await db('books')
            .select('*')
            .where(data);

        return result;
    }

    async updatePair(username, data) {
        const [id] = await db('books')
            .where('title', username)
            .update(data)
            .returning('id');

        return id;
    }

    async deletePair(data) {
        const [id] = await db('books')
            .where(data)
            .del()
            .returning('id');

        return id;
    }
}

module.exports = new FavoritesDAO()
