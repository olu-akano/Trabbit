const express = require('express');
const router = express.Router();
const User = require('../models/user')

// users index route 
async function index(req, res){
    try {
        const users = await User.all;
        res.json({users});
    } catch(err) {
        res.status(500).json({err});
    }
}

async function create(req, res){
    try {
        const user = await User.create(req.body);
        res.json(user)
    } catch(err) {
        res.status(500).json({err})
    }
}


module.exports = {index,create};