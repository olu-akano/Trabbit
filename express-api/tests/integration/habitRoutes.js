describe ('habit endpoints', () => {
    let api;
    beforeEach(async () => {
        await resetTestDB()
    });

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(done => {
        console.log('Stopping the test server')
        api.close(done)
    })

    it('should return a list of all habits in database', async () => {
        const res = await request(api).get('/habits');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(2);
    })

    it('should create a new habit', async () => {
        const res = await request(api)
            .post('/habits')
            .send({
                id: 1,
                habitname: 'sleeping',
                frequency: 2,
                description: 'I want to sleep 8 hours a day',
                current_count: 4,
                streak: 10,
            })
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("id");
    });

    it('should delete an habit', async () => {
        const res = await request(api)
            .delete('/habits/1')
        expect(res.statusCode).toEqual(204);

        const habitRes = await request(api).get('/habits/1');
        expect(habitRes.statusCode).toEqual(404);
        expect(habitRes.body).toHaveProperty('err');
    }); 
})