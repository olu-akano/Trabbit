const Habit = require('../../../models/habits');
const {mongodb} = require('mongodb');
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

    describe('destroy', () => {
        test('it resolves with message on successful db query', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ id: 1 });
            let testHabit = new Author({ id: 1, habitname: 'test habit', frequency: 5, current_count: 5, streak: 1})
            const result = await testHabit.destroy();
            expect(result).toBe('Habit 1 was deleted')
        })
    });

    describe('create', () => {
        test('it resolves with an habit on successful db query', async () => {
            let habitData = { id: 1, habitname: 'test habit', frequency: 5, current_count: 5, streak: 1 }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ habitData] });
            const result = await Habit.create('New Habit');
            expect(result).toBeInstanceOf(Habit)
        })
    });

    describe('findById', () => {
        test('it resolves with habit on successful db query', async () => {
            let authorData = {id: 1, habitname: 'test habit', frequency: 5, current_count: 5, streak: 1 }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ authorData] });
            const result = await Author.findById(1);
            expect(result).toBeInstanceOf(Author)
        })
    });

})