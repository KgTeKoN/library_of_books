const crypto = require('crypto');
const { cipherAlgorithm, secret } = require('../../config');
const argon2 = require('argon2');

const key = Buffer.from(secret, 'hex');

const encryptData = async (data) => {
    const iv = crypto.randomBytes(16).toString('hex').slice(0, 16);
    const cipher = crypto.createCipheriv(cipherAlgorithm, key, iv);

    let encrypted = cipher.update(String(data), 'utf8', 'hex')
    encrypted += cipher.final('hex');
    console.log('iv', iv)

    return `${encrypted}:${iv}`
}

const decrypto = async (encryptedData) => {
    const [encryptedString, iv] = encryptedData.split(':');
    const decipher = crypto.createDecipheriv(cipherAlgorithm, key, iv)

    let decrypted = decipher.update(encryptedString, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted
}

const createHash = async (data) => {
    const hash = await argon2.hash(data)
    return hash;
}

const compareHash = async (hash, data) => {
    const compareResult = await argon2.verify(hash, data);
    return compareResult
}

module.exports = { encryptData, createHash, decrypto, compareHash }
