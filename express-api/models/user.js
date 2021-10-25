const { init } = require ('../db_config/config')

class User {
    constructor(data){
        this.id = data.id;
        this.email=data.email;
        this.name = data.name;
        this.habit = data.habit;
        //add any other variables a user has later
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                const userData = await db.collection('users').find().toArray();
                const users = userData.map(d => new User({ ...d, id: d._id }));
                resolve(users);
            } catch (err) {
                console.log(err);
                reject("Error retrieving users");
            }
        })
    }


    static create(name, email ,habit){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                const userData = await db.collection('users').insertOne({ name, email, habit })
                console.log(userData);
                const newUser = new User(newUser.ops[0]);
                resolve (newUser);
            } catch(err) {
                reject('Error creating user');
            }
        });
    }

}

module.exports = User;