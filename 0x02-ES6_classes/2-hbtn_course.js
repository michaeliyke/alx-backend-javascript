/* eslint-disable no-underscore-dangle */
// Disable the said eslint rule for the entire file [or block of code]
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    if (!Array.isArray(students)) throw TypeError('Students must be an array');

    this._name = typeof name;
    this._length = typeof length;
    this._students = Array.isArray(students);
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('Name must be a string');
    this._name = newName;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') throw TypeError('Length must be a number');
    this._length = newLength;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) throw TypeError('Students must be an array');
    this._students = newStudents;
  }
}
