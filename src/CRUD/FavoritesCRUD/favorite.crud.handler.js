const favoriteController = require('./favoritesdb.controller');

const createFavoriteBookH = async (data) => {
    const result = await favoriteController.createFavoriteBook(data);
    return result;
};

const getFavoriteBooksH = async (username) => {
    const result = await favoriteController.findFavoriteBooks({
        username: username,
    });
    const answer = {};
    if (result && result.length) {
        answer.success = true;
        answer.favorites = result;
        return answer;
    }

    answer.success = false;
    answer.message = 'Favorite book not found';
    return answer;
};

const deleteFavoriteBookH = async (username, title) => {
    const result = await favoriteController.deleteFavoriteBook({
        username: username,
        title: title,
    });
    const answer = {};
    if (result && result.title) {
        answer.success = true;
        answer.message = `Favorite book ${result.title} has been deleted`;
        return answer;
    }

    answer.success = false;
    answer.message = 'Favorite book not found';
    return answer;
};

module.exports = {
    getFavoriteBooksH,
    createFavoriteBookH,
    deleteFavoriteBookH,
};
