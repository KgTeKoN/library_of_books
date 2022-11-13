const db = require('../../DB/db')

class FavoritesDAO {
    async createFavoriteBook(data) {
        const [user_name] = await db('favorites')
            .insert(data)
            .returning('username');

        return user_name;
    }

    async findFavoriteBooks(data) {
        const result = await db('favorites')
            .select('books._id', 'books.title', 'books.year' )
            .where(data)
            .from('favorites')
            .leftJoin('books', 'favorites.title', 'books.title')

        return result;
    }

    async deleteFavoriteBook(data) {
        const [title] = await db('favorites')
            .where(data)
            .del()
            .returning('title');

        return title;
    }
}

module.exports = new FavoritesDAO()
