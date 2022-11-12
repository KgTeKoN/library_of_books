const personDAO = require('./person.handler')

class PersonController {
    async createPerson(username, password, first_name, last_name) {
        try {
            const result = await personDAO.createPerson(username, password, first_name, last_name)
            return result
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }

    async findPerson(username) {
        try {
            const result = await personDAO.findPerson(username)
            return result
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }

    async updatePerson(username, data) {
        try {
            const result = await personDAO.updatePerson(username, data)
            return result
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }

    async deletePerson(username) {
        try {
            const result = await personDAO.deletePerson(username)
            return result
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }
}

module.exports = new PersonController();
