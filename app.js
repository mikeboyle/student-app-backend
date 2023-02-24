// Define our route handlers here
// Separation of concerns

// Import external stuff (libraries)
// Import express library
const express = require('express');
const cors = require('cors');
const db = require('./db');

// Import OUR stuff (our files, our components)
const studentsController = require('./controllers/studentsController');
const studentsControllerV2 = require('./controllers/v2/studentsControllerV2');

// Init express application
const app = express();

// Set up middleware
// Functions that will work with req, res before
// the final route handler function
app.use(cors());

// Controllers
app.use('/students', studentsController);
app.use('/v2/students', studentsControllerV2);

// Define our routes

// Healthcheck route
app.get('/', (request, response) => {
  response.status(200).json({ data: 'Service is running' });
});

// TODO: Remove this test route
app.get('/tests', async (request, response) => {
  try {
    const tests = await db.any('SELECT * FROM tests');

    response.status(200).json({ data: tests });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});



module.exports = app;
