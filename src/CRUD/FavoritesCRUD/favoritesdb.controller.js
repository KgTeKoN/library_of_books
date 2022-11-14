const favoritesDAO = require('./favoritesdb.handler');

class FavoritesdbController {
    async createFavoriteBook(data) {
        try {
            const result = await favoritesDAO.createFavoriteBook(data);
            return result;
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }

    async findFavoriteBooks(data) {
        try {
            const result = await favoritesDAO.findFavoriteBooks(data);
            return result;
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }

    async deleteFavoriteBook(data) {
        try {
            const result = await favoritesDAO.deleteFavoriteBook(data);
            return result;
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }
}

module.exports = new FavoritesdbController();
