const { init } = require ('../db_config/config')

class Habit {
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.streak = data.streak;
        this.count=data.count;
        this.frequency=data.frequency;
        //add any other variables a habit has later
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                const habitData = await db.collection('habits').find().toArray();
                const habits = habitData.map(d => new Habit({ ...d, id: d._id }));
                resolve(habits);
            } catch (err) {
                console.log(err);
                reject("Error retrieving habits");
            }
        })
    }

}

module.exports = Habit;