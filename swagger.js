const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Todo List API',
        version: '1.0.0',
        description: 'API documentation for the Todo List application',
      },
      servers: [
        {
          url: 'http://localhost:5000/api',
        },
      ],
    },
    apis: ['API_Documentation/tasks.js'],
};

const specs = swaggerJSDoc(options);

module.exports = {
    serveSwaggerUI: (app) => {
      app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
    },
    specs,
};