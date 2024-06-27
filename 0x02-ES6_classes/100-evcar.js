/* eslint-disable no-underscore-dangle */
/* Disable the said eslint rule for the entire file [or block of code] */

import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return new EVCar(this._brand, this._motor, this._color, this._range);
  }
}
