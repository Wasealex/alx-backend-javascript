export default function updateStudentGradeByCity(students, city, newGrades) {
const uniqstudents = students.filter((student) => student.location === city);
  for (const student of uniqstudents) {
    student.grade = 'N/A';
  }
  const newStudents = students.map((student) => {
    const single = student;
    for (const grade of newGrades) {
      if (single.id === grade.studentId) {
        single.grade = grade.grade;
      }
    }
    return single;
  });
  return newStudents;
}
