const favoritesDAO = require('./favorites.handler')

class FavoritesController {
    async createFavoriteBook(data) {
        try {
            const result = await favoritesDAO.createFavoriteBook(data)
            return result
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }

    async findFavoriteBook(data) {
        try {
            const result = await favoritesDAO.findFavoriteBook(data)
            return result
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }

    async updateFavoriteBook(title, data) {
        try {
            const result = await favoritesDAO.updateFavoriteBook(title, data)
            return result
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }

    async deleteFavoriteBook(data) {
        try {
            const result = await favoritesDAO.deleteFavoriteBook(data)
            return result
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }
}

module.exports = new FavoritesController();
