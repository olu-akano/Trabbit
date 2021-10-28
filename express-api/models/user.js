const { init } = require ('../db_config/config')

class User {
    constructor(data){
        this.id = data.id;
        this.email=data.email;
        this.username = data.username;
        this.password_digest = data.password_digest;
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


    static create(data){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                const { username, email } = data;
                const password_digest = data.password
                const userData = await db.collection('users').insertOne({ username, email, password_digest })
                const newId = userData.insertedId
                const newUserData = await db.collection('users').find({_id: newId}).toArray();
                const newUser = new User(newUserData[0]);
                resolve (newUser);
            } catch(err) {
                reject(`Error creating user: ${err}`);
            }
        });
    }

    static findByEmail(email){
        return new Promise(async (resolve, reject)=> {
            try {
                const db = await init();
                let userData = await db.collection('users').find({email: {$eq: `${email}`}}).toArray()
                if(!userData.length){ resolve(null) };
                let user = new User ({...userData[0], email: userData[0].email});
                resolve(user);
            } catch (err) {
                console.log(err)
                reject("Error retrieving email")
            }
         });
        }
    };

module.exports = User;