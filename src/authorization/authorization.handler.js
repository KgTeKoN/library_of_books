const { createHash, encryptData, decrypto, compareHash } = require('../crypto/crypto');
const PersonController = require('../CRUD/UsersCRUD/person.controller')
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
    const result = await PersonController.findPerson({ username: username });
    const decipherPassword = await decrypto(result.password);
    const compareResult = compareHash(decipherPassword, password)
    if(compareResult) {
        const accessToken = await createToken({password: result.password}, accessTokenKey, 60*10);
        const refreshToken = await createToken({password: result.password}, refreshTokenKey, 60*60);
        const hashRefreshToken = await createHash(refreshToken);
        const userInfo = await PersonController.updatePerson(username, { refresh_token: hashRefreshToken })
        return {
            accessToken: accessToken,
            refreshToken: refreshToken,
            status: userInfo.status
        }
    }

    return 'Invalid email or password';
}

module.exports = { signUp, signIn }



