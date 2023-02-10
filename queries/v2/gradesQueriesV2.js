const gradesDataV2 = require('../../data/v2/gradesDataV2.json');

const getGradesByStudentIdV2 = (id) => {
  // create an array to hold the results
  const results = [];
  const { grades } = gradesDataV2;
  // for each grade..
  for (const grade of grades) {
    // get the studentId for that grade
    const { studentId } = grade;
    // if studentId === id..
    if (studentId === id) {
      // push the grade to results
      results.push(grade);
    }
  }

  return results;
};

module.exports = {
  getGradesByStudentIdV2,
};
