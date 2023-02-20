const express = require('express');
const {
  getAllStudentsV2,
  getStudentByIdV2,
  getAllStudentsWithGradesV2,
} = require('../../queries/v2/studentsQueriesV2');

const { getGradesByStudentIdV2 } = require('../../queries/v2/gradesQueriesV2');

const studentsControllerV2 = express.Router();

studentsControllerV2.get('/', (request, response) => {
  try {
    const { include } = request.query;
    if (include === 'grades') {
      // embed the grades
      const students = getAllStudentsWithGradesV2();
      return response.status(200).json({ data: students });
    } else {
      const students = getAllStudentsV2();
      return response.status(200).json({ data: students });
    }
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

// GET /students/:id/grades
studentsControllerV2.get('/:id/grades', (request, response) => {
  try {
    const { id } = request.params;
    const student = getStudentByIdV2(id);

    if (student) {
      // return 200
      // if student, get the student's grades
      const grades = getGradesByStudentIdV2(id);
      return response.status(200).json({ data: grades });
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
