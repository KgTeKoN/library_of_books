const db = require('../knex/db')

class PersonDAO {
    async createPerson(username, password, first_name, last_name) {
        const [id] = await db('users').insert({
            username: username,
            password: password,
            first_name: first_name,
            last_name: last_name
        }).returning('id');

        return id;
    }

    async findPerson(username) {
        const [result] = await db('users').select().where({
            username: username
        });

        return result;
    }

    async updatePerson(username, data) {
        const [id] = await db('users')
            .where('username', username)
            .update(data)
            .returning('id');

        return id;
    }

    async deletePerson(username) {
        const [id] = await db('users').where({
            username: username
        }).del().returning('id');

        return id;
    }
}

module.exports = new PersonDAO()
