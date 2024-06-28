/* eslint-disable no-underscore-dangle */
/* Disable the said eslint rule for the entire file [or block of code] */

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  set motor(newMotor) {
    this._motor = newMotor;
  }

  set color(newColor) {
    this._color = newColor;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species(this.brand, this.motor, this.color);
  }

  static get [Symbol.species]() {
    return this;
  }
}
