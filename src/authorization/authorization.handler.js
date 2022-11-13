const { createHash, encryptData, decrypto, compareHash } = require('../crypto/crypto');
const PersonController = require('../CRUD/UsersCRUD/persondb.controller')
const { createToken } = require('./jwt')
const { accessTokenKey, refreshTokenKey } = require('../../config')

const signUp = async (data) => {
    const { password } = data;
    const hash = await createHash(password);
    const encryptedPassword = await encryptData(hash);
    data.password = encryptedPassword;
    data.status = 'Inactive';
    const result = await PersonController.createPerson(data);

    return result
}

const signIn = async (data) => {
    const { username, password } = data;
    const [result] = await PersonController.findPerson({ username: username });
    const decipherPassword = await decrypto(result.password);
    const compareResult = compareHash(decipherPassword, password)
    if(compareResult) {
        const accessToken = await createToken({password: result.password}, accessTokenKey, 60*10);
        const refreshToken = await createToken({password: result.password}, refreshTokenKey, 60*60);
        const hashRefreshToken = await createHash(refreshToken);
        if ((result) && (result.status === 'Banned' || result.status === 'Deleted')) {
            return {
                success: false,
                message: `User ${result.username} is ${result.status}!`
            }
        }
        const userInfo = await PersonController.updatePerson(username, { refresh_token: hashRefreshToken })
        if (userInfo) {
            return {
                success: true,
                tokens: {
                    accessToken: accessToken,
                    refreshToken: refreshToken
                }
            }
        }
    }

    return {
        success: false,
        message: 'Invalid email or password'
    }
}

module.exports = { signUp, signIn }



