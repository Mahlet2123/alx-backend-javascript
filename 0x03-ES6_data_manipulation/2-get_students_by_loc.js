export default function getStudentsByLocation(studentsArray, city) {
  if (!Array.isArray(studentsArray)) {
    return [];
  } if (typeof city !== 'string') {
    return '';
  }
  return studentsArray.filter((student) => student.location === city);
}
