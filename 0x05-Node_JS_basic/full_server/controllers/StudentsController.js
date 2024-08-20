const readDatabase = require('../utils.js');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase().then((fields) => {
      const students = [];
      Object.keys(fields).forEach((field) => {
        fields[field].forEach((student) => {
          students.push(student);
        });
      });
      res.status(200).send('This is the list of our students\n'
        + students.join(', '));
    }).catch((error) => res.status(500).send(error));
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase().then((fields) => {
      if (fields[major]) {
        res.status(200).send('This is the list of our students\n'
          + fields[major].join(', '));
      } else {
        res.status(500).send('Cannot load the database');
      }
    }).catch((error) => res.status(500).send(error));
  }
}

module.exports = StudentsController;
