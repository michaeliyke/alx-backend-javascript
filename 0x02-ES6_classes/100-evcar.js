/* eslint-disable no-underscore-dangle */
/* Disable the said eslint rule for the entire file [or block of code] */

import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    // User the super class instead to construct the new object
    const Species = super.constructor[Symbol.species];
    return new Species(this.brand, this.motor, this.color);
  }

  static get [Symbol.species]() {
    return Car;
  }
}
