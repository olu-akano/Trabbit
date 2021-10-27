const habitsController = require('../../../controllers/habits')
const Habit = require('../../../models/habits')

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }));
const mockRes = { status: mockStatus};

describe ('habits controller', () => {
    beforeEach(() => jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks ());

    describe('index', () => {
        test('it returns habits with a 200 status code', async () => {
            let testHabits = ['habit1', 'habit2']
            jest.spyOn(Habit, 'all', 'get')
                 .mockResolvedValue(testHabits);
            await habitsController.index(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(testHabits);
        })
    }); 

    describe('show', () => {
        test('it returns an habit with a 200 status code', async () => {
            let testHabit = {
                habitname: 'Test Habit', frequency: 2, current_count: 4, streak:2
            }
            jest.spyOn(Habit, 'findById')
                .mockResolvedValue(new Habit(testHabit));
                
            const mockReq = { params: { frequency: 2 } }
            await habitsController.show(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new Habit(testHabit));
        })
    });

    describe('create', () => {
        test('it returns a new habit with a 201 status code', async () => {
            let testHabit = {
                habitname: 'Test Habit', 
                frequency: 2,
                current_count: 5,
                streak: 5, 
            }
            jest.spyOn(Habit, 'create')
                .mockResolvedValue(new Book(testHabit));
                
            const mockReq = { body: testHabit }
            await habitsController.create(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(new Habit(testHabit));
        })
    });

    describe('destroy', () => {
        test('it returns a 204 status code on successful deletion', async () => {
            jest.spyOn(Habit.prototype, 'destroy')
                .mockResolvedValue('Deleted');
            
            const mockReq = { params: { frequency: 2 } }
            await habitsController.destroy(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(204);
        })
    });
})