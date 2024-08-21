const fs = require('fs');

function readDatabase() {
  return new Promise((resolve, reject) => {
    const filePath = 'sdatabase.csv';
    // const filePath = process.argv[2] || 'database.csv';
    fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line);
        if (lines.length <= 1) {
          resolve({});
        }
        const fields = {};
        lines.slice(1).forEach((line) => {
          const [studentFirstName, , , field] = line.split(',');
          if (!fields[field]) fields[field] = [];
          fields[field].push(studentFirstName);
        });
        resolve(fields);
      }
    });
  });
}

module.exports = readDatabase;
