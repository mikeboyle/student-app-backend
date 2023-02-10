const studentsData = require('../data/studentsData.json');

const getAllStudents = () => {
  const { students } = studentsData;
  return students;
};

const getStudentById = (id) => {
  const { students } = studentsData;
  const student = students.find((el) => el.id === id);
  return student;
};

module.exports = {
  getAllStudents,
  getStudentById,
};
