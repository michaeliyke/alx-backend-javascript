#!/usr/bin/node
const http = require('http');
const fs = require('fs');

function countStudents(path) {
  let txt = "This is the list of our students\n";
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
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
  } catch (error) {
    return "Cannot load the database";
  }
  return txt.trimEnd();
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const txt = countStudents(process.argv[2]);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(txt);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 1245;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = server;
