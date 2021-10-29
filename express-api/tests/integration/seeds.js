function seeds ()  {
    db = connect("localhost:27017/habits")
    
    db.users.drop()
    db.habits.drop()
    
    db.users.insertMany([
        {id: 1, username: "test user 1", email: "test1@yeah.com", password_digest: "testingpassword1"},
        {id: 2, username: "test user 2", email: "test2@yeah.com", password_digest: "testingpassword2"},
    ])
    
    db.habits.insertMany ([
        {id: 1, username: "test user 1", habitname: "test habit 1", description: "test description 1", frequency: 5, current_count: 4, streak: 2 },
        {id: 2, username: "test user 1", habitname: "test habit 2", description: "test description 2", frequency: 3, current_count: 3, streak: 1 },
        {id: 3, username: "test user 3", habitname: "test habit 3", description: "test description 3", frequency: 7, current_count: 3, streak: 1 },
    ])
    
}

module.export = {seeds}