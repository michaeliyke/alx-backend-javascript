export default function updateStudentGradeByCity(students, location, grades) {
  return students.filter((student) => student.location === location)
    .map(student => {
      const grade = grades.find(grade => grade.studentId === student.id);
      if (grade) {
        student.grade = grade.grade;
      } else {
        student.grade = 'N/A';
      }
      return student;
    });
}
