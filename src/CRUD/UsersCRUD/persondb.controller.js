const personDAO = require('./persondb.handler')

class PersondbController {
    async createPerson(data) {
        try {
            const result = await personDAO.createPerson(data)
            return result
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }

    async findPerson(data) {
        try {
            const result = await personDAO.findPerson(data)
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

    async deletePerson(data) {
        try {
            const result = await personDAO.deletePerson(data)
            return result
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }
}

module.exports = new PersondbController();
