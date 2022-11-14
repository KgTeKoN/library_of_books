const { signUpSchema } = require('../validate.schema')

describe('validate schema registration', () => {

    test('validate correct data', async () => {
        const obj1 = { username: 'KG_TeKoN', password: 'xq27031993', first_name: 'Andriy', last_name: 'Petruniak' };
        await expect(signUpSchema.validateAsync(obj1)).resolves.toEqual(obj1);
    })

    test('try invalid username (is not be empty)', async () => {
        const obj2 = { username: '', password: 'xq27031993', first_name: 'Andriy', last_name: 'Petruniak' };
        await expect(signUpSchema.validateAsync(obj2)).rejects.toThrow("\"username\" is not allowed to be empty");
    })

    test('try invalid username (must be a string)', async () => {
        const obj3 = { username: 34, password: 'xq27031993', first_name: 'Andriy', last_name: 'Petruniak' };
        await expect(signUpSchema.validateAsync(obj3)).rejects.toThrow("\"username\" must be a string");
    })

    test('try invalid first_name (length must be at least 3 characters long)', async() => {
        const obj4 = { username: 'KG_TeKoN', password: 'xq27031993', first_name: 'A', last_name: 'Petruniak' };
        await expect(signUpSchema.validateAsync(obj4)).rejects.toThrow("\"first_name\" length must be at least 3 characters long");
    })

    test('try invalid first_name (must be a string)', async() => {
        const obj5 = { username: 'KG_TeKoN', password: 'xq27031993', first_name: 45, last_name: 'Petruniak' };
        await expect(signUpSchema.validateAsync(obj5)).rejects.toThrow("\"first_name\" must be a string");
    })

    test('try invalid first_name (must only contain alpha-numeric characters)', async() => {
        const obj6 = { username: 'KG_TeKoN', password: 'xq27031993', first_name: 'Андрій', last_name: 'Petruniak'};
        await expect(signUpSchema.validateAsync(obj6)).rejects.toThrow("\"first_name\" must only contain alpha-numeric characters");
    })

    test('try invalid first_name (is not be empty)', async() => {
        const obj7 = { username: 'KG_TeKoN', password: 'xq27031993', first_name: '', last_name: 'Petruniak' };
        await expect(signUpSchema.validateAsync(obj7)).rejects.toThrow("\"first_name\" is not allowed to be empty");
    })

    test('try invalid password (must be a string)', async() => {
        const obj8 = { username: 'KG_TeKoN', password: 27031993, first_name: 'Andrii', last_name: 'Petruniak' };
        await expect(signUpSchema.validateAsync(obj8)).rejects.toThrow("\"password\" must be a string");
    })

    test('try invalid password (length must be at least 6 characters long)', async() => {
        const obj9 = { username: 'KG_TeKoN', password: '273ew', first_name: 'Andrii', last_name: 'Petruniak' };
        await expect(signUpSchema.validateAsync(obj9)).rejects.toThrow("\"password\" length must be at least 6 characters long");
    })

    test('try invalid password (is not be empty)', async() => {
        const obj10 = { username: 'KG_TeKoN', password: '', first_name: 'Andrii', last_name: 'Petruniak' };
        await expect(signUpSchema.validateAsync(obj10)).rejects.toThrow("\"password\" is not allowed to be empty");
    })

    test('try invalid last_name (is not be empty)', async() => {
        const obj7 = { username: 'KG_TeKoN', password: 'xq27031993', first_name: 'Andrii', last_name: '' };
        await expect(signUpSchema.validateAsync(obj7)).rejects.toThrow("\"last_name\" is not allowed to be empty");
    })

    test('try invalid last_name (must be a string)', async() => {
        const obj8 = { username: 'KG_TeKoN', password: 'xq27031993', first_name: 'Andrii', last_name: 47987 };
        await expect(signUpSchema.validateAsync(obj8)).rejects.toThrow("\"last_name\" must be a string");
    })

    test('try invalid last_name (length must be at least 3 characters long)', async() => {
        const obj9 = { username: 'KG_TeKoN', password: 'xq27031993', first_name: 'Andrii', last_name: 'Pe' };
        await expect(signUpSchema.validateAsync(obj9)).rejects.toThrow("\"last_name\" length must be at least 3 characters long");
    })
})
