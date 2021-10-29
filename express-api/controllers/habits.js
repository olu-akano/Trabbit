const Habit = require('../models/habits')

// habits index route 
async function index(req, res){
    try {
        const habits = await Habit.all;
        res.status(200).json(habits);
    } catch(err) {
        res.status(500).json({err});
    }
}

// habits show route
async function show(req, res){
    try {
        const habit = await Habit.findById(req.params.id);
        res.status(200).json(habit);
    } catch(err) {
        res.status(404).json({err})
    }
}

async function showUsers(req, res){
    try {
        const habit = await Habit.findByUsername(req.params.username);
        res.status(200).json(habit);
    } catch(err) {
        res.status(404).json({err})
    }
}

async function create(req, res){
    try {
        const habit = await Habit.create(req.body);
        res.status(201).json(habit);
    } catch(err) {
        res.status(500).json({err})
    }
}

async function update(req, res) {
    try {
        const habit = await Habit.findById(req.params.id);
        const updatedHabit = await habit.update(req.body);
        res.status(200).json(updatedHabit)
    } catch(err) {
        res.status(500).json({err})
    }
}

async function destroy (req, res) {
    try {
        const habit = await Habit.findById(req.params.id);
        await habit.destroy();
        console.log(habit);
        res.status(204).json({success: true})
    } catch (err) {
        res.status(404).json({err});
    };
}

module.exports = { index , show, showUsers, create , update ,destroy };