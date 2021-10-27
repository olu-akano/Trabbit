const express = require('express');
const router = express.Router();
const habitsController = require('../controllers/habits')

const {verifyToken} = require('../middleware/auth');

router.get('/', habitsController.index);
router.get('/:id', habitsController.show);
router.get('/users/:username', habitsController.showUsers);
router.post('/', habitsController.create);
router.patch('/:id', habitsController.update);
router.delete('/:id', habitsController.destroy)
// router.get('/', verifyToken, habitsController.index);
// router.get('/:id', verifyToken, habitsController.show);
// router.get('/users/:username', verifyToken, habitsController.showUsers);
// router.post('/', verifyToken, habitsController.create);
// router.patch('/:id', verifyToken, habitsController.update);
// router.delete('/:id', verifyToken, habitsController.destroy)

module.exports = router;