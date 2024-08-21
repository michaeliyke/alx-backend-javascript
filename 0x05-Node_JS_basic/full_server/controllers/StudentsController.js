const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase().then((fields) => {
      let txt = 'This is the list of our students\n';
      const fieldsData = Object.keys(fields).sort();

      for (const field of fieldsData) {
        txt += `Number of students in ${field}: ${fields[field].length}. `
          + `List: ${fields[field].join(', ')}\n`;
      }
      res.status(200).send(txt.slice(0, -1)); // remove last newline character
    }).catch((error) => res.status(500).send(error));
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase().then((fields) => {
      if (fields[major]) {
        res.status(200).send(`List: ${fields[major].join(', ')}`);
      } else {
        res.status(500).send('Cannot load the database');
      }
    }).catch((error) => res.status(500).send(error));
  }
}

module.exports = StudentsController;
