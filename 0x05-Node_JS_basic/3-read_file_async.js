const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = lines.filter(line => line.trim() !== '');
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
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        });

        resolve();
      }
    });
  });
}

module.exports = countStudents;
