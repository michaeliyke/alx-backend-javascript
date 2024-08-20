#!/usr/bin/node
const express = require('express');
const fs = require('fs');

const app = express();

function countStudents(path) {
  let txt = '';
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        if (lines.length === 0) {
          resolve('Number of students: 0');
        }
        const students = lines.filter((line) => line.trim() !== '');
        const numberOfStudents = students.length - 1;
        txt += `Number of students: ${numberOfStudents}\n`;

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

        resolve(txt.trimEnd());
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const txt = countStudents(process.argv[2] || 'database.csv');
  txt.then((response) => {
    res.send(`This is the list of our students\n${response}`);
  })
    .catch((error) => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});


app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
