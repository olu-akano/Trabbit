const { init } = require ('../db_config/config')
const { ObjectId } = require('mongodb')

class Habit {
    constructor(data){
        this.id = data.id;
        this.username = data.username
        this.habitname = data.habitname;
        this.description = data.description;
        this.streak = data.streak;
        this.current_count=data.current_count;
        this.frequency=data.frequency;
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

    static findByUsername(username){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let habitData = await db.collection('habits').find( { username }).toArray();
                let habits = habitData.map(d => new Habit({...d, id: d._id}));
                resolve (habits);
            } catch (err) {
                console.log(err);
                reject(`Habits not found for ${username}`);
            }
        })
    }

    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let habitData = await db.collection('habits').find( { _id: ObjectId(id) }).toArray();
                let habit = new Habit({...habitData[0], id: habitData[0]._id.toString()});
                resolve(habit);
            } catch (err) {
                console.log(err);
                reject('Habit not found');
            }
        });
    };

    static create(data){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                const habitData = await db.collection('habits').insertOne({ ...data });
                const habit = this.findById(habitData.insertedId);
                resolve(habit);
            } catch(err) { 
                reject('Error creating habit');
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
    
    update(data){
        return new Promise(async(resolve, reject) => {
            try {
                const db = await init();
                const updateHabitData = await db.collection('habits').findOneAndUpdate({ _id: ObjectId(this.id) }, { $set: {...data} }, { returnDocument: 'after' });
                const updateHabit = updateHabitData.value;
                const updatedHabit= new Habit({...updateHabit, id: updateHabit._id.toString()});
                resolve(updatedHabit);
            } catch (err) {
                console.log(err);
                reject('Habit could not be updated');
            }
        })
    }

}

module.exports = Habit;