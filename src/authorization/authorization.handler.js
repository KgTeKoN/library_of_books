const {
    createHash,
    encryptData,
    decrypto,
    compareHash,
} = require('../crypto/crypto');
const PersonController = require('../CRUD/UsersCRUD/persondb.controller');
const { createToken, validateToken } = require('./jwt');
const { accessTokenKey, refreshTokenKey } = require('../../config');

const signUp = async (data) => {
    const { password } = data;
    const hash = await createHash(password);
    const encryptedPassword = await encryptData(hash);
    data.password = encryptedPassword;
    data.status = 'Inactive';
    const result = await PersonController.createPerson(data);

    return result;
};

const signIn = async (data) => {
    const { username, password } = data;
    const [result] = await PersonController.findPerson({ username: username });
    const decipherPassword = await decrypto(result.password);
    const compareResult = compareHash(decipherPassword, password);
    if (compareResult) {
        const accessToken = await createToken(
            { username: result.username },
            accessTokenKey,
            60 * 10
        );
        const refreshToken = await createToken(
            { username: result.username },
            refreshTokenKey,
            60 * 60
        );
        if (
            result &&
            (result.status === 'Banned' || result.status === 'Deleted')
        ) {
            return {
                success: false,
                message: `User ${result.username} is ${result.status}!`,
            };
        }
        const userInfo = await PersonController.updatePerson(username, {
            refresh_token: refreshToken,
        });
        if (userInfo) {
            return {
                success: true,
                tokens: {
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    status: result.status,
                },
            };
        }
    }

    return {
        success: false,
        message: 'Invalid email or password',
    };
};

const activateHandler = async (token) => {
    const decodeToken = await validateToken(token, accessTokenKey);
    if (decodeToken && decodeToken.username) {
        const result = await PersonController.updatePerson(
            decodeToken.username,
            {
                status: 'Active',
            }
        );
        const answer = {};
        if (result && result.username) {
            answer.success = true;
            answer.status = result.status;
            answer.message = `User ${result.username} is logged in`;
            return answer;
        }
    }

    answer.success = false;
    answer.message = 'No user found';
    return answer;
};

const refreshHandler = async (token) => {
    const [result] = await PersonController.findPerson({
        refresh_token: token,
    });
    if (result && result.username) {
        const decodeToken = await validateToken(token, refreshTokenKey);
        const accessToken = await createToken(
            { username: decodeToken.username },
            accessTokenKey,
            60 * 10
        );
        return { accessToken: accessToken };
    }

    return { message: 'Token is invalid' };
};

const logoutHandler = async (token) => {
    const decodeToken = await validateToken(token, accessTokenKey);
    const result = await PersonController.updatePerson(decodeToken.username, {
        refresh_token: null,
        status: 'Inactive',
    });
    const answer = {};
    if (result && result.username) {
        answer.success = true;
        answer.message = `User ${result.username} is logged out`;
        return answer;
    }

    answer.success = false;
    answer.message = 'No user found';
    return answer;
};

module.exports = {
    signUp,
    signIn,
    activateHandler,
    refreshHandler,
    logoutHandler,
};
