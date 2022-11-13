const personController = require('./persondb.controller');
const { getFavoriteBooksH, deleteFavoriteBookH } = require('../FavoritesCRUD/favorite.crud.handler')
const pagination = require('../../Pagination/pagination.controller')

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

const getAllUsersH = async (data) => {
    const query = {};
    const answer = {};
    if (data.username) query.username = data.username;
    if (data.first_name) query.first_name = data.first_name;
    if (data.last_name) query.last_name = data.last_name;
    let sort = '_id';
    if(data.sort) sort = data.sort;
    let limit = 3;
    if(data.limit) limit = data.limit;
    answer.limit = limit;
    let skip = 0;
    if(data.skip) skip = data.skip;
    console.log('skip', skip)
    let page = 1;
    if(data.page) {
        skip = +skip + (data.page - 1) * limit;
    }
    answer.page = page;
    const result = await pagination.paginationUsers(query, sort, limit, skip)
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
