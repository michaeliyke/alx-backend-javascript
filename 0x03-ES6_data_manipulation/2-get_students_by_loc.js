export default function getStudentsByLoc(students, location) {
  if (!Array.isArray(students)) return [];
  return students.filter((student) => student.location === location);
}
