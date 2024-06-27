/* eslint-disable no-underscore-dangle */
/* Disable the said eslint rule for the entire file [or block of code] */

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  toString() {
    // Output: [object SFO]
    return `[${this.name} ${this.code}]`;
  }
}
