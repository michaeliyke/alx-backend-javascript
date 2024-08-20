#!/usr/bin/node
const fs = require('fs');
// eslint-disable-next-line no-unused-vars
const { log } = console;

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    const students = lines.filter((line) => line.trim() !== '');
    const numberOfStudents = students.length - 1;
    console.log(`Number of students: ${numberOfStudents}`);

    const fields = {};
    students.slice(1).forEach((data) => {
      const detail = data.split(',');
      const [name, field] = [detail[0], detail[3]];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(name);
    });

    Object.entries(fields).forEach(([field, names]) => {
      console.log(`Number of students in ${field}: ${names.length}.`
        + `List: ${names.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database: ');
  }
};
