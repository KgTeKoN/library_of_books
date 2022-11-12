const db = require('../knex/db')

class PersonDAO {
    async createPerson(data) {
        const [id] = await db('users')
            .insert(data)
            .returning('id');

        return id;
    }

    async findPerson(data) {
        const [result] = await db('users')
            .select('*')
            .where(data);

        return result;
    }

    async updatePerson(username, data) {
        const [id] = await db('users')
            .where('username', username)
            .update(data)
            .returning('id');

        return id;
    }

    async deletePerson(data) {
        const [id] = await db('users')
            .where(data)
            .del()
            .returning('id');

        return id;
    }
}

module.exports = new PersonDAO()
