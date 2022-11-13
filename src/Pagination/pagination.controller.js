const paginationHandler = require('./pagination.handler')

class PaginationController {
    async paginationBooks(data, sort, page, skip) {
        try {
            const result = await paginationHandler.byBook(data, sort, page, skip)
            return result
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }

    async paginationUsers(data) {
        try {
            const result = await paginationHandler.byUser(data)
            return result
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }
}

module.exports = new PaginationController()
