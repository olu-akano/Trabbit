const express = require('express');
const router = express.Router();
const User = require('../models/user')

// entries index route 
router.get('/', async (req, res) => {
    try {
        const users = await User.all
        res.json({users})
    } catch(err) {
        res.status(500).json({err})
    }
})


module.exports = router;