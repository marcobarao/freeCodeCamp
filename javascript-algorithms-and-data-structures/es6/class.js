// Use class to define constructor
function makeClass() {
  "use strict";
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name);

// Use getters and setters to control access to an object
function makeClass() {
  "use strict";
  class Thermostat {
    constructor(fahrenheit) {
      this._fahrenheit = fahrenheit;
    }
    get temperature() {
      return (5 / 9) * (this._fahrenheit - 32);
    }
    set temperature(temp) {
      this._fahrenheit = (temp * 9) / 5 + 32;
    }
  }
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
