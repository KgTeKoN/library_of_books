const { signUpSchema, signInSchema } = require('./validate.schema');

const signUpValidator = async (req, res, next) => {
    try {
        await signUpSchema.validateAsync(req.body);
        return next();
    } catch (e) {
        const result = e.details[0].message;
        res.status(400).send(result);
        res.end();
    }
}

const signInValidator = async (req, res, next) => {
    try {
        await signInSchema.validateAsync(req.body);
        return next();
    } catch (e) {
        const result = e.details[0].message;
        res.status(400).send(result);
        res.end();
    }
};

module.exports = { signUpValidator, signInValidator };
