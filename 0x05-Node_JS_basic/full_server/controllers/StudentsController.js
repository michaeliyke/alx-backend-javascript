const readDatabase = require('../utils.js');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(/* database path */)
      .then(/* handle success */)
      .catch((error) => res.status(500).send(error));
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(/* database path */)
      .then(/* handle success */)
      .catch((error) => res.status(500).send(error));
  }
}

module.exports = StudentsController;
