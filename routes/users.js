const express = require('express');
const router = express.Router();
const Task = require("../models/tasks")
const User = require("../models/users")


router.get('/users/:userId/tasks',async function(req, res, next) {

   try{
      const userId = parseInt(req.params.userId)
      const userTask = await Task.findAll({where:{userId}})
      
      if (!userTask || userTask.length === 0) {
         return res.status(404).json({ message: 'Tasks not found for the specified user ID' });
       }
      
       res.json(userTask)
   }
   catch (error){
      res.status(500).json({ error: 'Internal server error' });
   }
})

router.post('/users/:userId/tasks', async (req, res) => {
   try {
     const userId = parseInt(req.params.userId);
     const { title, description, dueDate, completed } = req.body;
 
     // Find the user
     const user = await User.findByPk(userId);
     if (!user) {
       return res.status(404).json({ message: 'User not found' });
     }

     console.log( title, description, dueDate, completed,userId)
 
     // Create the task
     const task = await Task.create({
       title,
       description,
       dueDate,
       completed,
       userId: userId,
     });
 
     res.status(201).json(task);
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Internal server error' });
   }
 });

 router.put('/users/:userId/tasks/:taskId', async (req, res) => {
   try {
     const userId = parseInt(req.params.userId);
     const taskId = parseInt(req.params.taskId);
     const { title, description, dueDate, completed } = req.body;
 
     // Find the user
     const user = await User.findByPk(userId);
     if (!user) {
       return res.status(404).json({ message: 'User not found' });
     }
 
     // Find the task for the user
     const task = await Task.findOne({ where: { id: taskId, userId: userId } });
     if (!task) {
       return res.status(404).json({ message: 'Task not found for the specified user' });
     }
 
     // Update the task
     await task.update({
       title,
       description,
       dueDate,
       completed,
     });
 
     res.json(task);
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Internal server error' });
   }
 });
 
 router.delete('/users/:userId/tasks/:taskId', async (req, res) => {
   try {
     const userId = parseInt(req.params.userId);
     const taskId = parseInt(req.params.taskId);
 
     // Find the user
     const user = await User.findByPk(userId);
     if (!user) {
       return res.status(404).json({ message: 'User not found' });
     }
 
     // Find the task for the user
     const task = await Task.findOne({ where: { id: taskId, userId: userId } });
     if (!task) {
       return res.status(404).json({ message: 'Task not found for the specified user' });
     }
 
     // Delete the task
     await task.destroy();
 
     res.json({ message: 'Task deleted successfully' });
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Internal server error' });
   }
 });

module.exports = router;
