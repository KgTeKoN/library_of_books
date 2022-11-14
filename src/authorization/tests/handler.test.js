const { createHash, encryptData } = require('../../crypto/crypto');
const { signUp } = require('../authorization.handler');
const PersonController = require('../../CRUD/UsersCRUD/persondb.controller');

const testPasswordCipher = '123456';
const testPasswordHash = 'qwerty';

jest.mock('../../crypto/crypto', () => {
    const originalModule = jest.requireActual('../../crypto/crypto');

    return {
        __esModule: true,
        ...originalModule,
        createHash: jest.fn(() => testPasswordCipher),
        encryptData: jest.fn(() => testPasswordHash),
    };
});

jest.mock('../../CRUD/UsersCRUD/persondb.controller', () => {
    const originalModule = jest.requireActual(
        '../../CRUD/UsersCRUD/persondb.controller'
    );

    return {
        __esModule: true,
        ...originalModule,
        createPerson: jest.fn(() => 'test add in DB was successful'),
    };
});

describe('test handler', () => {
    test('input createPerson data must be as data.username, data.first_name, data.last_name, testPasswordHash', async () => {
        const data = {
            username: 'KG_TeKoN',
            password: 'password',
            first_name: 'Andrii',
            last_name: 'Petruniak',
            status: 'Inactive',
        };
        await signUp(data);

        expect(createHash).toBeCalledWith('password');
        expect(createHash).toBeCalledTimes(1);
        expect(encryptData).toBeCalledWith(testPasswordCipher);
        expect(encryptData).toBeCalledTimes(1);
        expect(encryptData(testPasswordCipher)).toEqual(testPasswordHash);
        expect(PersonController.createPerson).toBeCalledWith({
            username: data.username,
            first_name: data.first_name,
            last_name: data.last_name,
            password: testPasswordHash,
            status: data.status,
        });
        expect(PersonController.createPerson).toBeCalledTimes(1);
        expect(PersonController.createPerson()).toEqual(
            'test add in DB was successful'
        );
    });
});
