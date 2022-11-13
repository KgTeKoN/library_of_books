const paginationHandler = require('./pagination.handler')

class PaginationController {
    async paginationBooks(data, sort, limit, skip) {
        try {
            const result = await paginationHandler.byBook(data, sort, limit, skip)
            return result
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }

    async paginationUsers(data, sort, limit, skip) {
        try {
            const result = await paginationHandler.byUser(data, sort, limit, skip)
            return result
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }
}

module.exports = new PaginationController()
