'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     queryInterface.bulkInsert('Tasks' ,[
      {
        userId:6,
        title: 'Buy groceries',
        description: 'Milk, eggs, bread',
        dueDate: new Date('2023-05-20'),
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId:6,
        title: 'Do laundry',
        description: 'Wash and fold clothes',
        dueDate: new Date('2023-05-22'),
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId:6,
        title: 'Clean the house',
        description: 'Vacuum, dust, and mop floors',
        dueDate: new Date('2023-05-25'),
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
        
     ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
