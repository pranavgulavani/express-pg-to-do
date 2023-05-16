const express = require('express');
const router = express.Router();
const Task = require("../models/tasks")

/* GET users listing. */
router.get('/users/:userId/tasks',async function(req, res, next) {
   console.log("in")
   const userId = 6
   const userTask = await Task.findAll({where:{userId}})
   console.log(userId,userTask)
   res.json(userTask)
});

module.exports = router;
