const express = require('express');
const router = express.Router();
const Habit = require('../models/habits')

// habits index route 
async function index(req, res){
    try {
        const habits = await Habit.all;
        res.json({habits});
    } catch(err) {
        res.status(500).json({err});
    }
}

// habits show route
async function show(req, res){
    try {
        const habit = await Habit.findById(req.params.id);
        res.json(habit);
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
        console.log(err);
    }
}


async function update(req, res) {
    try {
        const habit = await Habit.findById(req.params.id);
        const updatedHabit = await habit.update();
        res.json({habit: updatedHabit})
    } catch(err) {
        res.status(500).json({err})
    }
}

async function destroy (req, res) {
    try {
        const habit =await Habit.findById(parseInt(req.params.id));
        const habits = await habit.destroy();
        console.log(habits);
        res.status(204).end();
    } catch (err) {
        res.status(404).json({err});
    };
}

module.exports = { index , show, create , update ,destroy };