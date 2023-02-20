const studentsDataV2 = require('../../data/v2/studentsDataV2.json');

const { getGradesByStudentIdV2 } = require('./gradesQueriesV2');

const getAllStudentsV2 = () => {
  const { students } = studentsDataV2;
  return students;
};

const getAllStudentsWithGradesV2 = () => {
  // create our results array
  const results = [];
  // get all students
  const students = getAllStudentsV2();
  // for each student...
  for (const student of students) {
    // get the student's id
    const { id } = student;
    // call getGradesByStudentId to get that student's grades
    const grades = getGradesByStudentIdV2(id);
    // copy the student and then add its grades (no mutating) to the copy
    const copy = { ...student };
    copy.grades = grades;
    // push the copy into results
    results.push(copy);
  }

  // return results
  return results;
};

const getStudentByIdV2 = (id) => {
  const { students } = studentsDataV2;
  const student = students.find((el) => el.id === id);
  return student;
};

module.exports = {
  getAllStudentsV2,
  getStudentByIdV2,
  getAllStudentsWithGradesV2,
};
