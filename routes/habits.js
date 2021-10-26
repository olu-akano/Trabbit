const express = require('express');
const router = express.Router();
const habitsController = require('../controllers/habits')

const {verifyToken} = require('../middleware/auth');

router.get('/', verifyToken, habitsController.index);
router.get('/:id', verifyToken, habitsController.show);
router.post('/', verifyToken, habitsController.create);
router.patch('/:id', verifyToken, habitsController.update);
router.delete('/:id', verifyToken, habitsController.destroy)

module.exports = router;