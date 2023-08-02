export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  if (typeof city !== 'string') {
    return '';
  }
  if (!Array.isArray(newGrades)) {
    return [];
  }
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const foundGrade = newGrades.find((grade) => grade.studentId === student.id);
      const grade = foundGrade ? foundGrade.grade : 'N/A';

      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade,
      };
    });
}
