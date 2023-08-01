export default function getStudentIdsSum(studentsArray) {
  if (!Array.isArray(studentsArray)) {
    return [];
  }
  return(
    studentsArray.reduce((prevStudent, currStudent) => prevStudent.id || prevStudent + currStudent.id, 0)
  );
}
