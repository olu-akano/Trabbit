const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users')

const { verifyToken } = require('../middleware/auth');

router.get('/', verifyToken, usersController.index);

module.exports = router;