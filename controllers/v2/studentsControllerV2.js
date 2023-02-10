const express = require('express');
const {
  getAllStudentsV2,
  getStudentByIdV2,
} = require('../../queries/v2/studentsQueriesV2');

const studentsControllerV2 = express.Router();

studentsControllerV2.get('/', (request, response) => {
  try {
    const students = getAllStudentsV2();
    response.status(200).json({ data: students });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

studentsControllerV2.get('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const student = getStudentByIdV2(id);

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

module.exports = studentsControllerV2;
