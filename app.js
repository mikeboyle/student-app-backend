// Define our route handlers here
// Separation of concerns

// Import external stuff (libraries)
// Import express library
const express = require('express');

// Import OUR stuff (our files, our components)
const studentsData = require('./studentsData.json');

// Init express application
const app = express();

// Define our routes

// Healthcheck route
app.get('/', (request, response) => {
  response.status(200).json({ data: 'Service is running' });
});

app.get('/students', (request, response) => {
  try {
    const { students } = studentsData;
    response.status(200).json({ data: students });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

app.get('/students/:id', (request, response) => {
  try {
    const { id } = request.params;
    const { students } = studentsData;

    const student = students.find((el) => el.id === id);
    if (student) {
      // return 200
      return response.status(200).json({ data: student });
    }
    // return 404
    response
      .status(404)
      .json({ error: `Could not find student with id ${id}` });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = app;
