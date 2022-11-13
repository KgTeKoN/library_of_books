const personController = require('../CRUD/UsersCRUD/persondb.controller')

const getStatusH = async (username) => {
    const [result] = await personController.findPerson({username: username});
    const answer = {};
    if (result) {
        answer.success = true;
        answer.status = result.status;
        return answer;
    }

    answer.success = false;
    answer.message = 'No user found'
    return answer
}

const changeStatusH = async (username, status) => {
    const result = await personController.updatePerson(username,{status: status});
    const answer = {} ;
    if ((result) && (result.username) ) {
        answer.success = true;
        answer.message = `${result.username} user status has been changed`;
        return answer
    }

    answer.success = false;
    answer.message = 'No user found'
    return answer;
}

module.exports = { getStatusH, changeStatusH }
