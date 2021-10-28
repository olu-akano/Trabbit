const User = require('../../../models/user');
const mongodb = require('mongodb');
jest.mock('mongodb');

const db = require ('../../../db_config/config');

describe('User', () => {
    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.resetAllMocks())

    describe('all', () => {
        test('it resolves with users on successful db query', async () => {
            jest.spyOn(db, 'find')
                .mockResolvedValueOnce({ rows: [{}, {}, {}, {}]});
            const all = await User.all;
            expect(all).toHaveLength(4)
        })
    });

})