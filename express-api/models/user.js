const { init } = require ('../db_config/config')

class User {
    constructor(data){
        this.id = data.id;
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

}

module.exports = User;