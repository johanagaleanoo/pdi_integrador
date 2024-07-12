const express = require('express');
const router = express.Router();

const taskController = require("../controllers/taskController");

router.get('/', taskController.all_tasks);
router.get('/specific/:id', taskController.id_task);
router.post('/', taskController.create_task);
router.put('/:id', taskController.update_task);
router.delete('/:id', taskController.delete_task);

module.exports = router