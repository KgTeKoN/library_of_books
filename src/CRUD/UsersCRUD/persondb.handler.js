const db = require('../../DB/db');

class PersonDAO {
    async createPerson(data) {
        const [id] = await db('users').insert(data).returning('_id');

        return id;
    }

    async findPerson(data) {
        const result = await db('users').select('*').where(data);

        return result;
    }

    async updatePerson(username, data) {
        const [user] = await db('users')
            .where('username', username)
            .update(data)
            .returning('username');

        return user;
    }

    async deletePerson(data) {
        const [user] = await db('users')
            .where(data)
            .del()
            .returning('username');

        return user;
    }
}

module.exports = new PersonDAO();
