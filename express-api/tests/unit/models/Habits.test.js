const Habit = require('../../../models/habits');
const mongodb = require('mongodb');
jest.mock('mongodb');

const db = require ('../../../db_config/config');

describe('Author', () => {
    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.resetAllMocks())

    describe('all', () => {
        test('it resolves with habits on successful db query', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}, {}, {}, {}, {}, {}]});
            const all = await Habit.all;
            expect(all).toHaveLength(7)
        })
    });

})