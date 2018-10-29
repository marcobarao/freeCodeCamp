// Use spread operator to evaluate arrays in-place
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1];
})();
console.log(arr2);

// Use destructuring assignment to assign variables from objects
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  const { tomorrow: tempOfTomorrow } = avgTemperatures;
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

// Use destructuring assignment to assign variables from nested objects
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  const {
    tomorrow: { max: maxOfTomorrow }
  } = forecast;
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

// Destructuring an array
let a = 8,
  b = 6;
(() => {
  "use strict";
  const [a, b] = [b, a];
})();
console.log(a);
console.log(b);

// Destructuring an array with rest operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  "use strict";
  const [, , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

// Destructuring parameters in functions
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict";
  return ({ max, min }) => (max + min) / 2.0;
})();
console.log(stats);
console.log(half(stats));

// Concise object with literal declarations
const createPerson = (name, age, gender) => {
  "use strict";
  return {
    name,
    age,
    gender
  };
};
console.log(createPerson("Zodiac Hasbro", 56, "male"));

// Concise declarative functions
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);