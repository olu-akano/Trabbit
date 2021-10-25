const { init } = require ('../db_config/config')

class Habit {
    constructor(data){
        this.id = data.id;
        this.habitname = data.habitname;
        this.streak = data.streak;
        this.current_count=data.current_count;
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

    static create(habitname, streak, current_count, frequency ){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                const habitData = await db.collection('habits').insertOne({ habitname, streak, current_count, frequency })
                const newHabit = new Habit(habitData.ops[0]);
                resolve (newHabit);
            } catch(err) {
                reject('Error creating habit');
            }
        });
    }

    destroy(){
        return new Promise(async(resolve, reject) => {
            try {
                const result = await db.habits.deleteOne( {id : this.id});
                console.log(result);
                resolve('Habit was deleted');
            } catch (err) {
                reject('Habit could not be deleted');
            }
        })
    };
    
    update(){
        return new Promise(async(resolve, reject) => {
            try {
                //add an if function later so it olnly increament the count if the task is not compelete yet
                const result = await db.habits.updateOne( {id : this.id},{ $set : {current_count:current_count++}});
                console.log(result);
                resolve('Habit was updated');
            } catch (err) {
                reject('Habit could not be updated');
            }
        })
    }

}

module.exports = Habit;