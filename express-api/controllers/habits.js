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


module.exports = router;