#!/usr/bin/node
const fs = require('fs');
const log = console.log;

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const headers = lines[0].split(',');
    const students = [];

    for (const line of lines.slice(1)) {
      const [firstname, lastname, age, field] = line.split(',');
      const student = { firstname, lastname, age, field, };
      students.push(student);
    }

    const studentsByField = {};
    for (const student of students) {
      if (!studentsByField[student.field]) {
        studentsByField[student.field] = {
          field: student.field,
          names: [],
        };
      }
      studentsByField[student.field].names.push(student.firstname);
    }

    log(`Number of students: ${students.length}`);
    for (const field of Object.values(studentsByField)) {
      log(`Number of students in ${field.field}: ${field.names.length}. List: ${field.names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database: ' + error);
  }
};
