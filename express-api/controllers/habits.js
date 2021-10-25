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

async function create(req, res){
    try {
        const habit = await Habit.create(req.body.name, req.body.streak,  req.body.count, req.body.frequency);
        res.json(habit)
    } catch(err) {
        res.status(500).json({err})
    }
}

async function destroy (req, res) {
    try {
        const habit =await Habit.findById(parseInt(req.params.id));
        const habits = await habit.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({err});
    };
}

module.exports = { index , create ,destroy };