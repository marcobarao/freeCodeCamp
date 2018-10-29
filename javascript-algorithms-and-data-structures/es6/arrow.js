// Use arrow functions to write anonymous functions
const magic = () => new Date();

// Arrow functions with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// Write higher order arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = arr => {
  "use strict";
  const squaredIntegers = arr
    .filter(num => num > 0 && Number.isInteger(num))
    .map(num => num * num);
  return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
