const personController = require('./persondb.controller');
const { getFavoriteBooksH, deleteFavoriteBookH } = require('../FavoritesCRUD/favorite.crud.handler')

const getUserH = async (username) => {
    const [result] = await personController.findPerson({username: username});
    const answer = {};
    const userInfo = {};
    let count = 0;
    for (const key in result) {
        if( (result[key]) && (key !== 'password') && (key !== 'refresh_token')) {
            count++
            userInfo[key] = result[key]
        }
    }
    const favoriteBooks = await getFavoriteBooksH(username);
    if ((favoriteBooks) && (favoriteBooks.favorites)) {
        userInfo.favorites = favoriteBooks.favorites;
    }
    if (count) {
        answer.success = true;
        answer.data = userInfo;
        return answer;
    }

    answer.success = false;
    answer.message = 'No user found'
    return answer
}

const getAllUsersH = async () => {
    const result = await personController.findPerson({})
    const answer = {};
    if ((result) && (result.length)) {
        let count = 0;
        const usersInfo = result.map(element => {
            const userInfo = {};
            for (const key in element) {
                if ((element[key]) && (key !== 'password') && (key !== 'refresh_token')) {
                    count++
                    userInfo[key] = element[key]
                }
            }
            return userInfo;
        })

        let favoriteBooks = {};
        for (const key of usersInfo) {
            favoriteBooks = await getFavoriteBooksH(key.username);
            if ((favoriteBooks) && (favoriteBooks.favorites)) {
                key.favorites = favoriteBooks.favorites;
            }
        }

        if (count) {
            answer.success = true;
            answer.data = usersInfo;
            return answer;
        }
    }

    answer.success = false;
    answer.message = 'No users found'
    return answer
}

const updateUserH = async (username, data) => {
    const result = await personController.updatePerson(username, data);
    const answer = {} ;
    if ((result) && (result.username)) {
        answer.success = true;
        answer.message = `User ${result.username} has been updated`;
        return answer
    }

    answer.success = false;
    answer.message = 'No user found'
    return answer;
}

const deleteUserH = async (username) => {
    const res = await getFavoriteBooksH(username);
    if ((res.favorites) && (res.favorites.length)) {
        for (const key of res.favorites) {
            await deleteFavoriteBookH(username, key.title)
        }
    }
    const result = await personController.deletePerson({username: username});
    const answer = {} ;
    if ((result) && (result.username) ) {
        answer.success = true;
        answer.message = `User ${result.username} has been deleted`;
        return answer
    }

    answer.success = false;
    answer.message = 'No user found'
    return answer;
}

module.exports = { getUserH, getAllUsersH, updateUserH, deleteUserH }
