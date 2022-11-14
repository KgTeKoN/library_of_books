const {
    updateUserSchema,
    createBookSchema,
    updateBookSchema,
} = require('./validate.scema');

const updateUserValidator = async (req, res, next) => {
    try {
        await updateUserSchema.validateAsync(req.body);
        return next();
    } catch (e) {
        const result = e.details[0].message;
        res.status(400).send(result);
        res.end();
    }
};

const createBookValidator = async (req, res, next) => {
    try {
        await createBookSchema.validateAsync(req.body);
        return next();
    } catch (e) {
        const result = e.details[0].message;
        res.status(400).send(result);
        res.end();
    }
};

const updateBookValidator = async (req, res, next) => {
    try {
        await updateBookSchema.validateAsync(req.body);
        return next();
    } catch (e) {
        const result = e.details[0].message;
        res.status(400).send(result);
        res.end();
    }
};

module.exports = {
    updateUserValidator,
    createBookValidator,
    updateBookValidator,
};
