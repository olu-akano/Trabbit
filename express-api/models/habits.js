const { init } = require ('../db_config/config')
const { ObjectId } = require('mongodb')

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
                let habit = habitData.map(d => new Habit({...d, id: d._id}));
                resolve(habit);
            } catch (err) {
                console.log(err);
                reject("Error retrieving habits");
            }
        })
    }


    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let habitData = await db.collection('habits').find( { _id: ObjectId(id) }).toArray();
                console.log(habitData);
                let habit = new Habit({...habitData[0], id: habitData[0]._id});
                resolve (habit);
            } catch (err) {
                console.log(err);
                reject('Habit not found');
            }
        });
    };


    static create(habitname, streak, current_count, frequency ){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                // const habitData = await db.collection('habits').insertOne({ habitname : habit, streak: streak, current_count:count, frequency :frequency});
                const habitData = await db.collection('habits').insertOne({ habitname, streak, current_count, frequency });
                console.log(habitData);
                const newHabit = new Habit(habitData.ops[0]);
                resolve (newHabit);
            } catch(err) {
                reject('Error creating habit');
                console.log(err);
            }
        });
    }

    destroy(){
        return new Promise(async(resolve, reject) => {
            try {
                const db = await init();
                const result = await db.collection('habits').deleteOne({ _id: ObjectId(this.id) });
                console.log(result);
                resolve(result);
            } catch (err) {
                reject('Habit could not be deleted');
            }
        })
    };
    
    update(){
        return new Promise(async(resolve, reject) => {
            try {
                //add an if function later so it olnly increament the count if the task is not compelete yet
                const db = await init();
                const updateHabit = await db.collection('habits').findOneAndUpdate({ _id: ObjectId(this.id) }, { $inc: { current_count: 1 } }, { returnOriginal: false });
                const  updatedHabit= new Habit(updateHabit.value);
                resolve (updatedHabit);
                console.log(updatedHabit);
            } catch (err) {
                reject('Habit could not be updated');
            }
        })
    }

}

module.exports = Habit;