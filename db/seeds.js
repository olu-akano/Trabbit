db = connect("localhost:27017/habits")

db.users.drop()
db.habits.drop()

db.users.insertMany([
    {username: "Bob", email: "bob@yeah.com", password_digest: "bluesky"},
    {username: "Skylar", email: "skylar@yeah.com", password_digest: "rednight"}
])

db.habits.insertMany ([
    {habitname: "exercising", frequency: 5, current_count: 10, streak: 2 },
    {habitname: "reading", frequency: 3, current_count: 3, streak: 1 }
])