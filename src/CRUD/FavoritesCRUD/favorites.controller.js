const favoritesDAO = require('./favorites.handler')

class FavoritesController {
    async createPair(data) {
        try {
            const result = await favoritesDAO.createPair(data)
            return result
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }

    async findPair(data) {
        try {
            const result = await favoritesDAO.findPair(data)
            return result
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }

    async updatePair(title, data) {
        try {
            const result = await favoritesDAO.updatePair(title, data)
            return result
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }

    async deletePair(data) {
        try {
            const result = await favoritesDAO.deletePair(data)
            return result
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }
}

module.exports = new FavoritesController();
