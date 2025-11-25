const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

// GET routes
router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getTaskById);

// POST route
router.post('/tasks', createTask);

// PUT route
router.put('/tasks/:id', updateTask);

// DELETE route
router.delete('/tasks/:id', deleteTask);

module.exports = router;
