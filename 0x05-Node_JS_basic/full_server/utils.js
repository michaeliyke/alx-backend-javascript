const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject('Cannot load the database');
      } else {
        const lines = data.split('\n').filter((line) => line);
        if (lines.length <= 1) {
          resolve({});
        }
        const fields = {};
        lines.slice(1).forEach((line) => {
          const [student, , , field] = line.split(',');
          if (!fields[field]) fields[field] = [];
          fields[field].push(student);
        });
        resolve(fields);
      }
    });
  });
}

module.exports = readDatabase;
