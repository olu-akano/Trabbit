db = connect("localhost:27017/habits")

db.users.drop()
db.habits.drop()

db.users.insertMany([
    {username: "Bob", email: "bob@yeah.com", password_digest: "bluesky"},
    {username: "Skylar", email: "skylar@yeah.com", password_digest: "rednight"}
])

db.habits.insertMany ([
    {username: "Bob", habitname: "exercising", description: "Go for a morning jog", frequency: 5, current_count: 4, streak: 2 },
    {username: "Bob", habitname: "reading", description: "Read a book before bed", frequency: 3, current_count: 1, streak: 1 },
    {username: "Skylar", habitname: "get 5-a-day", description: "", frequency: 7, current_count: 3, streak: 1 }
])