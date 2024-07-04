const express = require('express');
const { Task, sequelize } = require('../models');

const router = express.Router();

// Create a new task
router.post('/', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a task
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      await task.update(req.body);
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a task
// router.delete('/:id', async (req, res) => {
//   try {
//     const task = await Task.findByPk(req.params.id);
//     if (task) {
//       await task.destroy();
//       res.status(204).send();
//     } else {
//       res.status(404).json({ error: 'Task not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

//Delete a task
router.delete('/:id', (req, res) => {
  const taskId = req.params.id;

  sequelize.query('DELETE FROM Tasks WHERE id = ?', {
    replacements: [taskId],
    type: sequelize.QueryTypes.DELETE
  })
  .then(() => {
    res.status(200).json({msg: 'Task deleted successfully'});
  })
  .catch((err) => {
    console.error('Error deleting task', err);
    res.status(500).send('Error deleting task');
  });
});

module.exports = router;