// Function
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

// Functions with arguments
function functionWithArgs(a, b) {
  console.log(a + b);
}

functionWithArgs(1, 2);

// Global scope and functions
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Local scope and functions
function myLocalScope() {
  "use strict";
  var myVar = "Hello";
  console.log(myVar);
}
myLocalScope();

console.log(myVar);

// Global and local scope in functions
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";

  return outerWear;
}

myOutfit();

// Return a value from a funciton
function timesFive(num) {
  return num * 5;
}

console.log(minusSeven(10));

// Undefined Value returned from functions
function addFive() {
  sum += 5;
}

var returnedValue = addFive(); // undefined

// Assignment with a returned value
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

var processed = processArg(7);

// Stand in line
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Return early pattern for functions
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);
