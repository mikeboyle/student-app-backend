const db = require('../../db');

const { getGradesByStudentIdV2 } = require('./gradesQueriesV2');

const getAllStudentsV2 = async () => {
  const students = await db.any('SELECT * FROM students');
  return students;
};

const getAllStudentsWithGradesV2 = async () => {
  // create our results array
  const results = [];
  // get all students
  const students = await getAllStudentsV2();
  // for each student...
  for (const student of students) {
    // get the student's id
    const { id } = student;
    // call getGradesByStudentId to get that student's grades
    const grades = await getGradesByStudentIdV2(id);
    // copy the student and then add its grades (no mutating) to the copy
    const copy = { ...student };
    copy.grades = grades;
    // push the copy into results
    results.push(copy);
  }

  // return results
  return results;
};

const getStudentByIdV2 = async (id) => {
  const student = await db.oneOrNone('SELECT * FROM students WHERE id = $1', [
    id,
  ]);
  return student;
};

module.exports = {
  getAllStudentsV2,
  getStudentByIdV2,
  getAllStudentsWithGradesV2,
};
