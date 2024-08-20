#!/usr/bin/node
const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const database = process.argv[2] || 'database.csv';
  fs.readFile(database, 'utf8').then((data) => {
    const lines = data.trim().split('\n');
    if (lines.length === 0) {
      res.send('Number of students: 0');
    }
    const students = lines.filter((line) => line.trim() !== '');
    const numberOfStudents = students.length - 1;
    let txt = `Number of students: ${numberOfStudents}\n`;

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
      txt += `Number of students in ${field}: ${names.length}. `
        + `List: ${names.join(', ')}\n`;
    });

    res.send(`This is the list of our students\n${txt.trimEnd()}`);
  }).catch(() => {
    res.send('Cannot load the database');
  });
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
