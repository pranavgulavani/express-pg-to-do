/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         dueDate:
 *           type: string
 *           format: date
 *         completed:
 *           type: boolean
 *
 * @swagger
 * /tasks/{userId}/tasks:
 *   get:
 *     description: All tasks by user
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: User ID
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Returns an array of task objects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *
 * @swagger
 * /tasks/{userId}/tasks:
 *   post:
 *     summary: Create a task for a specific user
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: User ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       '201':
 *         description: Task created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       '400':
 *         description: Invalid request body
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 * 
 * @swagger
 * /tasks/{userId}/tasks/{taskId}:
 *   put:
 *     summary: Update a task for a specific user
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: User ID
 *         schema:
 *           type: integer
 *       - in: path
 *         name: taskId
 *         required: true
 *         description: Task ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       '201':
 *         description: Task updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       '400':
 *         description: Invalid request body
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 * 
 * @swagger
 * /tasks/{userId}/tasks/{taskId}:
 *   delete:
 *     summary: Delete a task for a specific user
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: User ID
 *         schema:
 *           type: integer
 *       - in: path
 *         name: taskId
 *         required: true
 *         description: Task ID
 *         schema:
 *           type: integer
 *     responses:
 *       '201':
 *         description: Task Deleted successfully
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */