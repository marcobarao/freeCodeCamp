// Console log
let a = 5;
let b = 1;
a++;
console.log(a);

let sumAB = a + b;
console.log(sumAB);

// Console clear
let outputTwo = "This will print to the browser console 2 times";
console.log(outputTwo);

let outputOne = "Try to get this to log only once to the browser console";
console.clear();

console.log(outputOne);

// Catch misspelled variable and function name
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

// Don't forget close brackets, parentheses, brances and quotes
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

// Catch mixed usage of single and double quotes
let innerHtml = '<p>Click here to <a href="#Home">return home</a></p>';
console.log(innerHtml);

// Catch use of assignmnet operator instead of equality operator
let x = 7;
let y = 9;
let result = "to come";

if (x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

// Catch missing open and closing parenthesis after a function call
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);

// Catch arguments passed in the wrong order when calling a function
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

// Catch off by one errors when using indexing
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  for (let i = 0; i < len; i++) {
    console.log(firstFive[i]);
  }
}

countToFive();

// Use caution when reinitializing variables inside loop
function zeroArray(m, n) {
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      row.push(0);
    }

    newArray.push(row);
    row = [];
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

// Prevent infinite loops with valid terminal condition
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}
