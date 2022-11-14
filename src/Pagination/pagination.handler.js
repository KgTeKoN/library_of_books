const db = require('../DB/db');

class PaginationHandler {
    async byBook(data, sort, limit, offset) {
        const result = await db('books')
            .select('*')
            .where(data)
            .limit(limit)
            .offset(offset)
            .orderBy(sort);

        return result;
    }

    async byUser(data, sort, limit, offset) {
        const result = await db('users')
            .select('*')
            .where(data)
            .orderBy(sort)
            .limit(limit)
            .offset(offset);

        return result;
    }
}

module.exports = new PaginationHandler();
