#!/usr/bin/node
const http = require('http');
const fs = require('fs');


function countStudents(path) {
  let txt = '';
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        if (lines.length === 0) {
          resolve("Number of students: 0");
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
          ttx += `Number of students in ${field}: ${names.length}. `
            + `List: ${names.join(', ')}\n`;
        });

        resolve(txt.trimEnd());
      }
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const txt = countStudents(process.argv[2] || 'database.csv');

    txt.then((response) => {
      res.end(`This is the list of our students\n${response}`);
    }).catch((error) => {
      res.end(`This is the list of our students\n${error.message}`);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
